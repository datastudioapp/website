const exampleDatapackage = {
  "title": "Example datapackage",
  "description": "Example of a datapackage encapsulating a workflow on the opendata.fit platform",
  "algorithms": [
    {
      "name": "example_algorithm",
      "title": "Example algorithm",
      "code": "def func(x, y):\n  z = x + y**2\n  return {\n    \"z\": z,\n  }",
      "inputs": [
        {
          "name": "x",
          "title": "X input parameter",
          "description": "A parameter to the algorithm (can be input data, an initial value to a variable to be optimised, options for the algorithm, or any other value)",
          "type": "resource",
          "resource": "x_data"
        },
        {
          "name": "y",
          "title": "Y input parameter",
          "description": "A parameter to the algorithm (can be input data, an initial value to a variable to be optimised, options for the algorithm, or any other value)",
          "type": "resource",
          "resource": "y_data"
        }
      ],
      "outputs": [
        {
          "name": "z",
          "title": "Z",
          "description": "Output result value",
          "type": "resource",
          "resource": "z_data"
        }
      ]
    }
  ],
  "displays": [
    {
      "name": "example_workflow_display",
      "title": "Example workflow display",
      "description": "Defines a display for the example workflow. Describes the user interface components - input fields, output fields, visualisations, etc - to be displayed in the web application.",
      "icon": "",
      "algorithms": [
        "example_algorithm"
      ],
      "layout": {
        "type": "sidebar",
        "spec": {
          "panes": [
            {
              "name": "parameters",
              "tabs": [
                "params"
              ]
            },
            {
              "name": "main",
              "tabs": [
                "result"
              ]
            }
          ],
          "tabs": [
            {
              "name": "params",
              "title": "Parameters",
              "icon": "[icon to display in the tab title]",
              "views": [
                "params_view"
              ]
            },
            {
              "name": "result",
              "title": "Result",
              "icon": "[icon to display in the tab title]",
              "views": [
                "result_view"
              ]
            }
          ]
        }
      }
    }
  ],
  "resources": [
    {
      "name": "x_data",
      "title": "X input parameter",
      "format": "number",
      "data": 42
    },
    {
      "name": "y_data",
      "title": "Y input parameter",
      "format": "number",
      "data": 128
    },
    {
      "name": "z_data",
      "title": "Z output result",
      "format": "number",
      "data": null
    }
  ],
  "views": [
    {
      "name": "params_view",
      "title": "Parameter input view",
      "resources": [
        "x_data",
        "y_data"
      ],
      "specType": "opendatafit-params"
    },
    {
      "name": "result_view",
      "title": "Algorithm output view",
      "resources": [
        "z_data"
      ],
      "specType": "opendatafit-number"
    }
  ]
};
