import { useState, useRef } from "react";

export const useHeroVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  // Calcula el índice del siguiente video en el carrusel
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  // Genera la ruta del archivo de video
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  // Maneja el evento de carga de cada video
  const handleVideoLoad = () => {
    setLoadedVideos((prevValue) => prevValue + 1);
  };

  // Maneja el clic en el video en miniatura para cambiar al siguiente
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  // El hook retorna todo lo que el componente necesita
  return {
    currentIndex,
    upcomingVideoIndex,
    totalVideos,
    nextVideoRef,
    getVideoSrc,
    handleVideoLoad,
    handleMiniVdClick,
  };
};
