import { MutableRefObject, RefObject } from "react";
import { Button, Form } from "react-bootstrap";

const ReviewForm = ({
  handleSubmit,
  revText,
  labelText,
}: {
  handleSubmit: (e: React.FormEvent<HTMLInputElement>) => void;
  revText: MutableRefObject<HTMLInputElement | undefined>;
  labelText: string;
}) => (
  <div>
    {" "}
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText as unknown as RefObject<HTMLTextAreaElement>}
          as="textarea"
          rows={3}
          defaultValue={""}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit as () => void}>
        Submit
      </Button>
    </Form>{" "}
  </div>
);

export default ReviewForm;
