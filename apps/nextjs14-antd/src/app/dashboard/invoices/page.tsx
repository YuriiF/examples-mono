import { Suspense } from 'react';
import { fetchFilteredInvoices } from '@examples/auth';
import { Pagination } from '@examples/features/invoices';
import { Search } from '@examples/ui/components';
import { InvoicesTable } from '@examples/features/invoices/server';
import { CreateInvoice } from '@examples/features/invoices';
import { lusitana } from '@examples/ui/components';
import { InvoicesTableSkeleton } from '@examples/features/dashboard';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const { data: invoices, meta } = await fetchFilteredInvoices(
    query,
    currentPage
  );
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable invoices={invoices} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={meta.pagination.pageCount} />}
      </div>
    </div>
  );
}
