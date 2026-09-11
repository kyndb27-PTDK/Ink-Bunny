import { ArrowRight, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

type BookingDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingDialog({ open, onClose }: BookingDialogProps) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, open]);

  if (!open) return null;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="booking-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="booking-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="dialog-close"
          type="button"
          onClick={onClose}
          aria-label="Close booking form"
          data-testid="button-close-booking"
        >
          <X size={15} />
        </button>

        {sent ? (
          <div className="booking-success" data-testid="status-booking-sent">
            <span className="eyebrow">Transmission received</span>
            <strong id="booking-title">Your idea is in the room.</strong>
            <p>
              Thanks for reaching out. We will review the shape, scale and
              story of your piece, then reply with next steps within two working
              days.
            </p>
            <button className="button-ghost" type="button" onClick={onClose} data-testid="button-finish-booking">
              Close <ArrowRight size={15} />
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow">Private consultation · Bradford</span>
            <h2 id="booking-title">Start the piece.</h2>
            <p>
              Tell us what you are carrying. A rough idea, placement and
              scale is enough to open the door.
            </p>
            <form className="booking-form" onSubmit={submit}>
              <label>
                Name
                <input required name="name" placeholder="Your name" data-testid="input-booking-name" />
              </label>
              <label>
                Email
                <input required type="email" name="email" placeholder="you@email.com" data-testid="input-booking-email" />
              </label>
              <label>
                Direction
                <select name="direction" defaultValue="" data-testid="select-booking-direction">
                  <option value="" disabled>Select a direction</option>
                  <option>Custom blackwork</option>
                  <option>Large scale piece</option>
                  <option>Fine line / detail</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                The idea
                <textarea required name="idea" placeholder="What should this piece say without words?" data-testid="textarea-booking-idea" />
              </label>
              <button className="button-primary" type="submit" data-testid="button-submit-booking">
                Send private message <ArrowRight size={15} />
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}