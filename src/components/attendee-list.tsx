import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { Iconbutton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')


export function Attendeelist() {
  const [search, setSearch]= useState('')
  const [page, setPage] = useState(1)

  const totalpages = Math.ceil(attendees.length/10)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function goToFirstPage () {
    setPage(1)
  }

  function goToLastPage () {
    setPage(totalpages)
  }

  function goToNextPage () {
    setPage(page + 1)
  }

  function goToPreviousPage () {
    setPage(page - 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className=" flex px-3 w-72 py-1.5 border rounded-lg border-white/10 items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChanged}
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar Participantes..."
          />
        </div>

        {search}
      </div>

      <Table>
          <thead>
            <TableRow>
              <TableHeader
                style={{ width: 48 }}
              >
                <input
                  className="size-4 bg-black/20 rounded border border-white/10 "
                  type="checkbox"
                />
              </TableHeader>
              <TableHeader>
                Código
              </TableHeader>
              <TableHeader>
                Participante
              </TableHeader>
              <TableHeader>
                Data de inscrição
              </TableHeader>
              <TableHeader>
                Data do check-in
              </TableHeader>
              <TableHeader  style={{ width: 64 }}></TableHeader>
            </TableRow>
          </thead>

          <tbody>
            {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
              return (
                <TableRow
                  key={attendee.id}
                >
                  <TableCell>
                    <input
                      className="size-4 bg-black/20 rounded border border-white/10 "
                      type="checkbox"
                    />
                  </TableCell>
                  <TableCell>{attendee.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">{attendee.name}</span>
                      <span>{attendee.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {dayjs().to(attendee.createdAt)}
                  </TableCell>
                  <TableCell>
                    {dayjs().to(attendee.checkedAt)}
                  </TableCell>
                  <TableCell
                    style={{ width: 64 }}
                  >
                    <Iconbutton transparent={true}>
                      <MoreHorizontal className="size-4" />
                    </Iconbutton>
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>

          <tfoot>
            <TableRow>
              <TableCell colSpan={3}>
                mostrando 10 de {attendees.length} items
              </TableCell>

              <TableCell align="right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span> pagina {page} de {totalpages} </span>
                  <div className="flex gap-1.5">
                    <Iconbutton onClick={goToFirstPage} disabled={page === 1}>
                      <ChevronsLeft className="size-4" />
                    </Iconbutton>
                    <Iconbutton onClick={goToPreviousPage} disabled={page === 1}>
                      <ChevronLeft className="size-4" />
                    </Iconbutton>
                    <Iconbutton onClick={goToNextPage} disabled ={page === totalpages}>
                      <ChevronRight className="size-4" />
                    </Iconbutton>
                    <Iconbutton onClick={goToLastPage} disabled ={page === totalpages}>
                      <ChevronsRight className="size-4" />
                    </Iconbutton>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </tfoot>
        </Table>
      </div>
  );
}
