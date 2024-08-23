"use client";
import React from "react";
import { useSelector } from "react-redux";

const PreLoader = () => {
  const isLoading = useSelector((state) => state?.loader?.isLoader);

  // const pageHeight = document.documentElement.scrollHeight;

  return (
    isLoading && (
      <div className="preloader">
        <div className="loader">
          <div className="pre-shadow" />
          <div className="pre-box" />
        </div>
      </div>
    )
  );
};

export default PreLoader;
