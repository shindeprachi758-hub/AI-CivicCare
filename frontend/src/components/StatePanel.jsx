import { AlertCircle, Inbox, LoaderCircle } from 'lucide-react';

export function LoadingState({ message = 'Loading content...' }) {
  return (
    <div className="state-panel" role="status" aria-live="polite">
      <LoaderCircle className="loading-icon" size={30} />
      <h2>Just a moment</h2>
      <p className="muted">{message}</p>
    </div>
  );
}

export function EmptyState({
  title = 'Nothing here yet',
  message = 'There is no information to display at this time.',
}) {
  return (
    <div className="state-panel">
      <div className="icon-box"><Inbox size={28} /></div>
      <h2>{title}</h2>
      <p className="muted">{message}</p>
    </div>
  );
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'We could not load this information. Please try again later.',
  onRetry,
}) {
  return (
    <div className="state-panel" role="alert">
      <div className="icon-box"><AlertCircle size={28} /></div>
      <h2>{title}</h2>
      <p className="muted">{message}</p>
      {onRetry && (
        <button className="btn btn-primary" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}