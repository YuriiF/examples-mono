import { CreateForm } from '@examples/features/invoices';
import { Breadcrumbs } from '@examples/features/invoices';
import { fetchCustomers } from '@examples/auth';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <CreateForm customers={customers} />
    </main>
  );
}
