import React from 'react';
import Layout from '../components/Layout/Layout';
import MusicCard from '../components/MusicCard/MusicCard';
import Player from '../components/Player/Player';
import { useForm } from 'react-hook-form';
import { getStorage, ref } from 'firebase/storage';
import app from '../firebase/firebase';

const uploadSongs = () => {
  const storage = getStorage(app);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const upImage = data.image[0];
    const imageRef = ref(storage, '');
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
                  // {...register('songName', { required: true })}
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
                  // {...register('artistName', { required: true })}
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
                  // {...register('audio', { required: true })}
                />
                {errors.audio && (
                  <span className="text-red-700 text-sm font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="px-5 py-2 bg-primary col-span-2 rounded-lg font-semibold text-white mt-2"
              >
                Upload
              </button>
            </form>
          </div>
        </section>
      </Layout>
      {/* <Player /> */}
    </div>
  );
};

export default uploadSongs;
