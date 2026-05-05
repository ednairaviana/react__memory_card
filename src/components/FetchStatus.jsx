function FetchStatus({ status, resetGame }) {
  switch (status) {
    case "loading":
      return "Loading";
    case "error":
      return (
        <div className="flex flex-col gap-9 items-center justify-center h-[90vh]">
          <h1>Something went wrong!</h1>
          <button className="button" onClick={resetGame}>
            Try Again!
          </button>
        </div>
      );
  }
}

export default FetchStatus;
