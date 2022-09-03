export default function GridItem({ videoSrc }) {
  return (
    <div className="grid-item">
      <video
        src={videoSrc}
        muted
        autoPlay
        playsInline
        className="grid-item-media w-full"
        loop
      ></video>
    </div>
  );
}
