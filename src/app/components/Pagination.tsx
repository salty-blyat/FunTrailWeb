import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"

export default function Component() {
  return (
    <div className="flex items-center justify-center py-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="rounded-l-md" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="px-3 py-2">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="px-3 py-2 bg-primary text-primary-foreground">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="px-3 py-2">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="rounded-r-md" />
          </PaginationItem>
        </PaginationContent>
        <div className="ml-4 text-muted-foreground">Page 2 of 3</div>
      </Pagination>
    </div>
  )
}