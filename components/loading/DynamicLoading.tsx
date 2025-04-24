"use client";

import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@/components/loading/LoadingScreen"), {
  ssr: false,
});

const DynamicLoading = () => {
  return <Loading />;
};

export default DynamicLoading;
