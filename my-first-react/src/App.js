import React, { useState, Component } from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Button, {
  ButtonDenganChildrenProps,
  ButtonProps,
} from "./ButtonComponent";
import Paragraph from "./Paragraph";
import List from "./List";

export default function App() {
  const data = [
    { name: "uhuyy uhuyy", age: 22 },
    { name: "yoii", age: 21 },
  ];

  function onClickTombolQue() {
    console.log("tombol que diklik");
  }
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <HelloClass />
        <Button />
        <ButtonProps
          nama="TombolQue"
          color="green"
          onClick={onClickTombolQue}
        />
        <ButtonDenganChildrenProps>
          <div>Test</div>
        </ButtonDenganChildrenProps>
        <Paragraph nama="Muhammad Fatih" jabatan="nganggur dlu">
          <div>uhuyy</div>
        </Paragraph>
        <List data={data} />
      </header>
    </div>
  );
}

function Hello() {
  const [nama, setNama] = useState("muhammad Fatih");
  const [jabatan, setJabatan] = useState("si santuyy");
  const [usia, setUsia] = useState(21);

  return (
    <div>
      <h1>Hello {nama}</h1>
      <p>Jabatan Anda {jabatan}</p>
      <p>usia Anda : {usia}</p>
    </div>
  );
}

class HelloClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "uhuyy",
      jabatan: "sangg uhuyy",
      usia: 14,
    };
  }
  render() {
    const { nama, jabatan, usia } = this.state;
    return (
      <div>
        <h1> Hello {nama}</h1>
        <p>jabatan anda: {jabatan}</p>
        <p>usia anda : {usia}</p>
      </div>
    );
  }
}
