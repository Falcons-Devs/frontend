import React, { useEffect } from "react";
import { Container, Main, Table, Wrap, ProcedureContainer } from "./styles";
import { NameStatus } from "../../../../NameStatus";
import { Buttons } from "../../../../Buttons";
import { Table as TableInfo } from "../../../../Table";
import { Link } from "@reach/router";
import { IconAdd } from "../../../../../assets/static/icon-add";
import { MobileProcedure } from "../../../../MobileProcedure";

export const Procedures = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Wrap>
      <Container>
        <Main>
          <NameStatus title="Procedimientos" to="/admin" />
          <Link to="/admin-create-procedure">
            {screen.width <= 375 ? (
              <IconAdd width="50px" height="50px" fill="#2DD881" />
            ) : (
              <Buttons
                value="Crear procedimiento"
                responsivetablet
                color="#2DD881"
              />
            )}
          </Link>
        </Main>
        <Table>
          {screen.width <= 375 ? (
            <ProcedureContainer>
              <MobileProcedure value="Procedimiento 1" />
              <MobileProcedure value="Procedimiento 2" />
              <MobileProcedure value="Procedimiento 3" />
              <MobileProcedure value="Procedimiento 4" />
              <MobileProcedure value="Procedimiento 5" />
            </ProcedureContainer>
          ) : (
            <TableInfo
              col1="#"
              col2="Nombre"
              col3="Acciones"
              title="Procedimientos"
            />
          )}
        </Table>
      </Container>
    </Wrap>
  );
};
