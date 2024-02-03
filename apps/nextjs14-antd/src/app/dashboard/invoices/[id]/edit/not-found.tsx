import Button from 'antd/lib/button';
import Result from 'antd/lib/result';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Could not find the requested invoice."
      extra={
        <Button href="/dashboard/invoices" type="primary">
          Back Home
        </Button>
      }
    />
  );
}
