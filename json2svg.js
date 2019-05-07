const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_XLINK = "http://www.w3.org/1999/xlink";

//uses the json generated with /svg2json.html
let json = {
  Tag: "svg",
  Attributes: {
    width: "350",
    height: "350",
    viewBox: "0 0 350 350"
  },
  ChildNodes: [
    {
      Tag: "title",
      Attributes: {},
      ChildNodes: [],
      TextContent: "SVG 2 JSON"
    },
    {
      Tag: "desc",
      Attributes: {
        id: "description"
      },
      ChildNodes: [],
      TextContent: "this is a description"
    },
    {
      Tag: "defs",
      Attributes: {},
      ChildNodes: [
        {
          Tag: "symbol",
          Attributes: {
            id: "symb",
            viewBox: "59 70 150 218"
          },
          ChildNodes: [
            {
              Tag: "g",
              Attributes: {},
              ChildNodes: [
                {
                  Tag: "polygon",
                  Attributes: {
                    points: "134,128 209,288 59,288",
                    fill: "#f1c40f"
                  },
                  ChildNodes: [],
                  TextContent: ""
                },
                {
                  Tag: "rect",
                  Attributes: {
                    x: "70",
                    y: "70",
                    width: "125",
                    height: "90",
                    fill: "#e77e23"
                  },
                  ChildNodes: [],
                  TextContent: ""
                },
                {
                  Tag: "rect",
                  Attributes: {
                    x: "90",
                    y: "90",
                    width: "60",
                    height: "90",
                    fill: "black"
                  },
                  ChildNodes: [],
                  TextContent: ""
                }
              ],
              TextContent: ""
            }
          ],
          TextContent: ""
        }
      ],
      TextContent: ""
    },
    {
      Tag: "ellipse",
      Attributes: {
        cx: "225",
        cy: "175",
        rx: "70",
        ry: "50",
        fill: "#2a80b9"
      },
      ChildNodes: [],
      TextContent: ""
    },
    {
      Tag: "circle",
      Attributes: {
        cx: "280",
        cy: "250",
        r: "60",
        fill: "#16a086"
      },
      ChildNodes: [],
      TextContent: ""
    },
    {
      Tag: "path",
      Attributes: {
        transform: "translate(70, -110)",
        d:
          "M135,220C135,175 170,125 205,140C240,155 210,225 190,225C180,225 180,205 160,205C150,205 147,225 142,225C140,225 135,225 135,220Z",
        fill: "#8f44ad"
      },
      ChildNodes: [],
      TextContent: ""
    },
    {
      Tag: "use",
      Attributes: {
        "xlink:href": "#symb",
        width: "150",
        height: "218",
        x: "59",
        y: "70"
      },
      ChildNodes: [],
      TextContent: ""
    },
    {
      Tag: "text",
      Attributes: {
        id: "text",
        y: "300",
        x: "175",
        "font-size": "30",
        "text-anchor": "middle"
      },
      ChildNodes: [
        {
          Tag: "tspan",
          Attributes: {
            class: "em",
            dy: "9"
          },
          ChildNodes: [],
          TextContent: "Two,"
        },
        {
          Tag: "tspan",
          Attributes: {
            class: "strong em",
            dy: "9"
          },
          ChildNodes: [],
          TextContent: "Three!"
        }
      ],
      TextContent: "One,\n        "
    }
  ],
  TextContent: ""
};


//a function to draw an svg element
function drawSVGelmt(o, text_content, tag, parent) {
  var elmt = document.createElementNS(SVG_NS, tag);
  for (var name in o) {
    if (o.hasOwnProperty(name)) {
      let NS = name == "xlink:href" ? SVG_XLINK : "";
      elmt.setAttributeNS(NS, name, o[name]);
    }
  }

  if (text_content.length > 0) {
    elmt.textContent = text_content;
  }

  parent.appendChild(elmt);

  return elmt;
}


// a function that takes the json object and regenerates the svg element
function drawSVG(object, parent) {
  let elmt = drawSVGelmt(
    object.Attributes,
    object.TextContent,
    object.Tag,
    parent
  );
  for (let i = 0; i < object.ChildNodes.length; i++) {
    drawSVG(object.ChildNodes[i], elmt);
  }
}

drawSVG(json, wrap);
