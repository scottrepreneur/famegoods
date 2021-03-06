import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon, InlineIcon } from '@iconify/react';
import heartSolid from '@iconify/icons-la/heart-solid';
import commentsSolid from '@iconify/icons-la/comments-solid';
import shareAltSquareSolid from '@iconify/icons-la/share-alt-square-solid';
import baselineShare from '@iconify/icons-ic/baseline-share';

export default function TestCard({ tags, title, video, gif, file }) {
  // Sample file retrieval logic

  // const [images, setImages] = useState([]);
  // const [files, setFiles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [term, setTerm] = useState('');
  //
  // useEffect(() => {
  //   if (file) {
  //     setFiles(...file.file)
  //   } else {
  //     setFiles(`https://source.unsplash.com/random`)
  //   }
  // }, []);

  //  Parent css removed: h-auto max-w-screen-sm

  return (
    <div className="relative w-full h-auto snap-center always-stop rounded shadow-xl z-0">
      <div className="rounded shadow-lg">
        <img className="w-full" src={gif} />
        <div className="absolute bottom-0 left-0 mx-6 my-4">
          <div className="font-bold text-xl mb-2 text-white">
            {title}
          </div>
          <div className="flex py-4">
            <Link href="/post/[slug]" as={"/post/" + file.id}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                3 $TINGLES
              </button>
            </Link>
          </div>
          <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
            Tags: {tags}
          </div>
        </div>

        <div className="absolute bottom-0 right-0 space-y-8 mx-6 my-4">
          <Icon icon={heartSolid} height="3em" className="text-red-700" />
          <Icon icon={commentsSolid} height="3em" className="text-white" />
          <Icon icon={baselineShare} height="3em" className="text-blue-600" />
        </div>

      </div>
    </div>
  );
}
