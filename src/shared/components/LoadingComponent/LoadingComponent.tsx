import "./LoadingComponent.scss";

const LoadingComponent = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-border text-secondary" role="status"></div>
    </div>
  );
};

export default LoadingComponent;
