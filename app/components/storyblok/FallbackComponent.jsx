export default function FallbackComponent({blok}) {
  return (
    <div className="bg-red-500 p-2 my-4">
      {/* {JSON.stringify(blok)} */}
      <p className="text-center">
        You have'nt coded {blok?.component} in your codebase
      </p>
    </div>
  );
}
