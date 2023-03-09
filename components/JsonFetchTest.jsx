import { useJsonFetch } from "../hooks/useJsonFetch";

export function JsonFetchTest({ url }) {

  const [data, hasError, isLoading] = useJsonFetch(url);

  let elementClasses = 'p-5 border rounded text-center';
  let spinner;
  if (isLoading) {
    elementClasses += ' bg-primary';
    spinner = (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else if (hasError) {
    elementClasses += ' bg-danger';
  } else {
    elementClasses += ' bg-success';
  }

  return (
    <div className="col-4">
      <div
        className={elementClasses}
      >
        {spinner}
        {data.status}
      </div>
    </div>
  )
}