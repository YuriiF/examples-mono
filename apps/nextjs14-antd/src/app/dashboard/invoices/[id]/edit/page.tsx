import { EditInvoiceForm } from '@examples/features/invoices';
import { Breadcrumbs } from '@examples/features/invoices';
import { notFound } from 'next/navigation';
import { fetchCustomers, fetchInvoiceById } from '@examples/auth';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customers = await fetchCustomers();
  const invoice = await fetchInvoiceById(params.id);
  if (!invoice) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
}
