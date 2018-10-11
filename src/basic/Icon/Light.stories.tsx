import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from "./Icon";
import withBackgrounds from '@storybook/addon-backgrounds';

(storiesOf("Basic/Icons/Light", module) as any)
.addDecorator(
    withBackgrounds([
      { name: 'black', value: '#000000', default: true },
      { name: 'white', value: '#fffff' },
    ])
  )
  .addWithJSX(
    "bart",
    (() => (
      <div>
      <Icon type="light" name="bart"/>
    </div>
    ))
  ).addWithJSX(
    "bursdag",
    (() => (
      <div>
      <Icon type="light" name="bursdag"/>
    </div>
    ))
  ).addWithJSX(
    "design",
    (() => (
      <div>
      <Icon type="light" name="design"/>
    </div>
    ))
  ).addWithJSX(
    "erfaren",
    (() => (
      <div>
      <Icon type="light" name="erfaren"/>
    </div>
    ))
  ).addWithJSX(
    "fest",
    (() => (
      <div>
      <Icon type="light" name="fest"/>
    </div>
    ))
  ).addWithJSX(
    "filter",
    (() => (
      <div>
      <Icon type="light" name="filter"/>
    </div>
    ))
  ).addWithJSX(
    "foosball",
    (() => (
      <div>
      <Icon type="light" name="foosball"/>
    </div>
    ))
  ).addWithJSX(
    "fordeler",
    (() => (
      <div>
      <Icon type="light" name="fordeler"/>
    </div>
    ))
  ).addWithJSX(
    "fra_studier",
    (() => (
      <div>
      <Icon type="light" name="fra_studier"/>
    </div>
    ))
  ).addWithJSX(
    "ide_konsept",
    (() => (
      <div>
      <Icon type="light" name="ide_konsept"/>
    </div>
    ))
  ).addWithJSX(
    "innsikt_analyse",
    (() => (
      <div>
      <Icon type="light" name="innsikt_analyse"/>
    </div>
    ))
  ).addWithJSX(
    "kode",
    (() => (
      <div>
      <Icon type="light" name="kode"/>
    </div>
    ))
  ).addWithJSX(
    "konsulent",
    (() => (
      <div>
      <Icon type="light" name="konsulent"/>
    </div>
    ))
  ).addWithJSX(
    "loop",
    (() => (
      <div>
      <Icon type="light" name="loop"/>
    </div>
    ))
  ).addWithJSX(
    "lunsj",
    (() => (
      <div>
      <Icon type="light" name="lunsj"/>
    </div>
    ))
  ).addWithJSX(
    "manager",
    (() => (
      <div>
      <Icon type="light" name="manager"/>
    </div>
    ))
  ).addWithJSX(
    "målet",
    (() => (
      <div>
      <Icon type="light" name="målet"/>
    </div>
    ))
  ).addWithJSX(
    "passord",
    (() => (
      <div>
      <Icon type="light" name="passord"/>
    </div>
    ))
  ).addWithJSX(
    "prototype_utvikling",
    (() => (
      <div>
      <Icon type="light" name="prototype_utvikling"/>
    </div>
    ))
  ).addWithJSX(
    "samarbeid",
    (() => (
      <div>
      <Icon type="light" name="samarbeid"/>
    </div>
    ))
  ).addWithJSX(
    "senior",
    (() => (
      <div>
      <Icon type="light" name="senior"/>
    </div>
    ))
  ).addWithJSX(
    "sol",
    (() => (
      <div>
      <Icon type="light" name="sol"/>
    </div>
    ))
  ).addWithJSX(
    "soloppgang",
    (() => (
      <div>
      <Icon type="light" name="soloppgang"/>
    </div>
    ))
  ).addWithJSX(
    "sommerjobb",
    (() => (
      <div>
      <Icon type="light" name="sommerjobb"/>
    </div>
    ))
  ).addWithJSX(
    "teste_lære",
    (() => (
      <div>
      <Icon type="light" name="teste_lære"/>
    </div>
    ))
  ).addWithJSX(
    "ulemper",
    (() => (
      <div>
      <Icon type="light" name="ulemper"/>
    </div>
    ))
  ).addWithJSX(
    "veien",
    (() => (
      <div>
      <Icon type="light" name="veien"/>
    </div>
    ))
  ).addWithJSX(
    "verktøy",
    (() => (
      <div>
      <Icon type="light" name="verktøy"/>
    </div>
    ))
  ).addWithJSX(
    "verktøy 1",
    (() => (
      <div>
      <Icon type="light" name="verktøy_2"/>
    </div>
    ))
  ).addWithJSX(
    "verktøy 2",
    (() => (
      <div>
      <Icon type="light" name="verktøy_3"/>
    </div>
    ))
  ).addWithJSX(
    "emoji_1",
    (() => (
      <div>
      <Icon type="light" name="emoji_1"/>
    </div>
    ))
  ).addWithJSX(
    "emoji_2",
    (() => (
      <div>
      <Icon type="light" name="emoji_2"/>
    </div>
    ))
  ).addWithJSX(
    "emoji_3",
    (() => (
      <div>
      <Icon type="light" name="emoji_3"/>
    </div>
    ))
  ).addWithJSX(
    "emoji_4",
    (() => (
      <div>
      <Icon type="light" name="emoji_4"/>
    </div>
    ))
  );
