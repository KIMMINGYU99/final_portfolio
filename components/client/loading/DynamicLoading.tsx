"use client";

import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@/components/client/loading/LoadingScreen"), {
  ssr: false,
});

const DynamicLoading = () => {
  return <Loading />;
};

export default DynamicLoading;
