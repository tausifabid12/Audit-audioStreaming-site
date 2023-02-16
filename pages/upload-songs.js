import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Player from '../components/Player/Player';
import { useForm } from 'react-hook-form';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import app from '../firebase/firebase';
import { v4 } from 'uuid';
import { toast, Toaster } from 'react-hot-toast';

const uploadSongs = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [audioUrl, setAudioUrl] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const storage = getStorage(app);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    setUploadProgress(0);
    setLoading(true);
    const { songName, albumName, artistName, lyrics } = data;

    //********** uploading Image to imageBB *********** \\
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_ImageBB_Api}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData?.data?.url;
        console.log(imgUrl, 'imagebb');
        if (imgUrl) {
          //***********  uploading audio to firebase storage *********** \\
          const upAudio = data.audio[0];
          const audioRef = ref(storage, `auditAudio/${v4() + upAudio.name}`);
          const uploadTask = uploadBytesResumable(audioRef, upAudio);
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Get task progress
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(progress);
            },
            (error) => {
              console.log(error);
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);

                //**** Posting all data to mongoDB */
                if (downloadURL) {
                  fetch('/api/songsData', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                      songName,
                      albumName,
                      artistName,
                      lyrics,
                      imgUrl,
                      audioUrl: downloadURL,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data?.success) {
                        setLoading(false);
                        e.target.reset();
                        toast.success('Audio uploaded Successfully');
                      } else {
                        setLoading(false);
                      }
                    });
                }
              });
            }
          );
        }
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/bg-img.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Layout title="Upload-Song">
        <section className="w-full px-16 ">
          <h1 className="text-3xl font-bold text-white mb-10 mt-5">
            Upload Your songs
          </h1>
          <div className="w-full h-full bg-black/30 backdrop-blur-md p-20 rounded-xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Song Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Song Name"
                  className="input input-bordered w-full bg-transparent"
                  {...register('songName', { required: true })}
                />
                {errors.songName && (
                  <span className="text-red-700 text-sm font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Artist Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Artist Name"
                  className="input input-bordered w-full bg-transparent"
                  {...register('artistName', { required: true })}
                />
                {errors.artistName && (
                  <span className="text-red-700 text-sm font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Album Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Album Name"
                  accept="image/*"
                  className="input input-bordered w-full bg-transparent"
                  {...register('albumName', { required: true })}
                />
                {/* {errors.albumName && (
                  <span className="text-red-700 text-sm font-bold">
                    This field is required
                  </span>
                )} */}
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Song Image</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered file-input-red w-full bg-transparent"
                  {...register('image', { required: true })}
                />
                {errors.image && (
                  <span className="text-red-700 text-sm font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Lyrics</span>
                </label>
                <input
                  type="text"
                  placeholder="Lyrics"
                  className="input input-bordered w-full bg-transparent"
                  {...register('lyrics')}
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Audio File</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary border border-gray-700 file-input-red w-full bg-transparent"
                  accept="audio/*"
                  {...register('audio', { required: true })}
                />
                {errors.audio && (
                  <span className="text-red-700 text-sm font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${
                  loading && `loading`
                }  col-span-2  rounded-lg font-semibold text-white mt-2`}
              >
                {loading && uploadProgress
                  ? `Uploading ${Math.round(uploadProgress)}%`
                  : 'Upload'}
              </button>
            </form>
          </div>
        </section>
        <Toaster position="top-center" reverseOrder={false} />
      </Layout>
      <Player />
    </div>
  );
};

export default uploadSongs;
