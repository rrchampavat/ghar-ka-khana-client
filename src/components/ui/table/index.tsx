import { cn } from "@/lib/utils";
import { Table as MantineTable, type TableProps } from "@mantine/core";
import type { ReactNode } from "react";

interface TABLE_PROPS extends TableProps {
  columns: Array<string>;
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
        <MantineTable.Td>{item[row]}</MantineTable.Td>
      ))}
    </MantineTable.Tr>
  ));

  const columnEle = columns.map((col) => (
    <MantineTable.Th key={col}>{col}</MantineTable.Th>
  ));

  return (
    <MantineTable.ScrollContainer minWidth={500}>
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
        className={cn("!max-h-32", className)}
        {...rest}
      >
        <MantineTable.Thead>
          <MantineTable.Tr>{columnEle}</MantineTable.Tr>
        </MantineTable.Thead>
        <MantineTable.Tbody>{rowEle}</MantineTable.Tbody>
        {caption ? (
          <MantineTable.Caption>{caption}</MantineTable.Caption>
        ) : null}
      </MantineTable>
    </MantineTable.ScrollContainer>
  );
};

export default Table;
