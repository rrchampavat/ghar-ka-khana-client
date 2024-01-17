import ScrollArea from "@/ui/wrappers/scroll-area";
import { cn } from "@/lib/utils";
import { Table as MantineTable, type TableProps } from "@mantine/core";
import type { ReactNode } from "react";

interface TABLE_PROPS extends TableProps {
  columns: Array<string | ReactNode>;
  rows: Array<any>;
  caption?: string | ReactNode;
}

const Table = (props: TABLE_PROPS) => {
  const {
    columns,
    rows,
    caption,
    borderColor,
    captionSide = "top",
    highlightOnHover: isHighlightOnHover = true,
    highlightOnHoverColor,
    horizontalSpacing = "xs",
    layout,
    striped = false,
    stripedColor,
    verticalSpacing = "xs",
    withColumnBorders: isWithColumnBorders = false,
    withRowBorders: isWithRowBorders = true,
    withTableBorder: isWithTableBorder = false,
    className,
    ...rest
  } = props;

  const rowEle = rows.map((item, id) => (
    <MantineTable.Tr key={id}>
      {Object.keys(item).map((row) => (
        <MantineTable.Td key={item[row]}>{item[row]}</MantineTable.Td>
      ))}
    </MantineTable.Tr>
  ));

  const columnEle = columns.map((col, id) => (
    <MantineTable.Th key={id}>{col}</MantineTable.Th>
  ));

  return (
    <ScrollArea className="h-80" type="scroll">
      <MantineTable
        borderColor={borderColor}
        captionSide={captionSide}
        highlightOnHover={isHighlightOnHover}
        highlightOnHoverColor={highlightOnHoverColor}
        horizontalSpacing={horizontalSpacing}
        layout={layout}
        striped={striped}
        verticalSpacing={verticalSpacing}
        withColumnBorders={isWithColumnBorders}
        withRowBorders={isWithRowBorders}
        withTableBorder={isWithTableBorder}
        className={cn("", className)}
        {...rest}
      >
        <MantineTable.Thead>
          <MantineTable.Tr>{columnEle}</MantineTable.Tr>
        </MantineTable.Thead>
        <MantineTable.Tbody>{rowEle}</MantineTable.Tbody>
        {caption ? (
          <MantineTable.Caption className="!mb-0">
            {caption}
          </MantineTable.Caption>
        ) : null}
      </MantineTable>
    </ScrollArea>
  );
};

export default Table;
