export default class CLIDecoder {
  encode(text: any) {
    let reference = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".>",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "0": "-----",
      " ": "&nsp",
    };

    let encodeTxt = text
      .toLowerCase()
      .split("")
      .map((a: any) => reference[a as keyof typeof reference])
      .join(" ");

    console.log(encodeTxt);
    return encodeTxt;
  }

  decode(text: any) {
    let reference = {
      ".-": "a",
      "-...": "b",
      "-.-.": "c",
      "-..": "d",
      ".>": "e",
      "..-.": "f",
      "--.": "g",
      "....": "h",
      "..": "i",
      ".---": "j",
      "-.-": "k",
      ".-..": "l",
      "--": "m",
      "-.": "n",
      "---": "o",
      ".--.": "p",
      "--.-": "q",
      ".-.": "r",
      "...": "s",
      "-": "t",
      "..-": "u",
      "...-": "v",
      ".--": "w",
      "-..-": "x",
      "-.--": "y",
      "--..": "z",
      ".----": "1",
      "..---": "2",
      "...--": "3",
      "....-": "4",
      ".....": "5",
      "-....": "6",
      "--...": "7",
      "---..": "8",
      "----.": "9",
      "-----": "0",
      "&nsp": " ",
    };

    let decodeTxt = text
      .split(" ")
      .map((a: any) => reference[a as keyof typeof reference])
      .join("");

    return decodeTxt;
  }
}
