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

export function Attendeelist() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className=" flex px-3 w-72 py-1.5 border rounded-lg border-white/10 items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar Participantes..."
          />
        </div>
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
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <TableRow
                  key={i}
                >
                  <TableCell>
                    <input
                      className="size-4 bg-black/20 rounded border border-white/10 "
                      type="checkbox"
                    />
                  </TableCell>
                  <TableCell>12345</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">nome</span>
                      <span>email@gmail.com</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    7 dias atras
                  </TableCell>
                  <TableCell>
                    3 dias atras
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
                mostrando 10 de 228 items
              </TableCell>

              <TableCell align="right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span> pagina 1 de 23 </span>
                  <div className="flex gap-1.5">
                    <Iconbutton>
                      <ChevronsLeft className="size-4" />
                    </Iconbutton>
                    <Iconbutton>
                      <ChevronLeft className="size-4" />
                    </Iconbutton>
                    <Iconbutton>
                      <ChevronsRight className="size-4" />
                    </Iconbutton>
                    <Iconbutton>
                      <ChevronRight className="size-4" />
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
