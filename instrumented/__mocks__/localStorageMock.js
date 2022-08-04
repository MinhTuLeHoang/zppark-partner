function cov_29vw313wsi() {
  var path = "/home/minhtu/VNG/graduationProject/parking-partner-frontend/zppark-partner/src/__mocks__/localStorageMock.js";
  var hash = "8da59c73e323fa6216222ed950f5b71e4b03c124";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/minhtu/VNG/graduationProject/parking-partner-frontend/zppark-partner/src/__mocks__/localStorageMock.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 23
        },
        end: {
          line: 35,
          column: 4
        }
      },
      "1": {
        start: {
          line: 13,
          column: 16
        },
        end: {
          line: 13,
          column: 18
        }
      },
      "2": {
        start: {
          line: 14,
          column: 16
        },
        end: {
          line: 18,
          column: 6
        }
      },
      "3": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 31
        }
      },
      "4": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 34,
          column: 6
        }
      },
      "5": {
        start: {
          line: 23,
          column: 12
        },
        end: {
          line: 23,
          column: 30
        }
      },
      "6": {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 26,
          column: 42
        }
      },
      "7": {
        start: {
          line: 29,
          column: 12
        },
        end: {
          line: 29,
          column: 23
        }
      },
      "8": {
        start: {
          line: 32,
          column: 12
        },
        end: {
          line: 32,
          column: 30
        }
      },
      "9": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 36,
          column: 75
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 42
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 17
          },
          end: {
            line: 22,
            column: 18
          }
        },
        loc: {
          start: {
            line: 22,
            column: 32
          },
          end: {
            line: 24,
            column: 9
          }
        },
        line: 22
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 25,
            column: 17
          },
          end: {
            line: 25,
            column: 18
          }
        },
        loc: {
          start: {
            line: 25,
            column: 39
          },
          end: {
            line: 27,
            column: 9
          }
        },
        line: 25
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 15
          },
          end: {
            line: 28,
            column: 16
          }
        },
        loc: {
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 30,
            column: 9
          }
        },
        line: 28
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 31,
            column: 21
          }
        },
        loc: {
          start: {
            line: 31,
            column: 35
          },
          end: {
            line: 33,
            column: 9
          }
        },
        line: 31
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8da59c73e323fa6216222ed950f5b71e4b03c124"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29vw313wsi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_29vw313wsi();
var localStorageMock = (cov_29vw313wsi().s[0]++, function (status) {
  cov_29vw313wsi().f[0]++;
  // var store = {};
  // if(status == "has session") {
  //     const str = JSON.stringify({
  //         accessToken: 'accessToken',
  //         expiredDate: new Date(Date.now() - 1000),
  //         email: 'sampleEmail@gmail.com'
  //     });
  //     store = {"mySession": str};
  // }
  // else store = {};
  var store = (cov_29vw313wsi().s[1]++, {});
  const str = (cov_29vw313wsi().s[2]++, JSON.stringify({
    accessToken: 'accessToken',
    expiredDate: new Date(Date.now() - 1000),
    email: 'sampleEmail@gmail.com'
  }));
  cov_29vw313wsi().s[3]++;
  store = {
    "mySession": str
  };
  cov_29vw313wsi().s[4]++;
  return {
    getItem: function (key) {
      cov_29vw313wsi().f[1]++;
      cov_29vw313wsi().s[5]++;
      return store[key];
    },
    setItem: function (key, value) {
      cov_29vw313wsi().f[2]++;
      cov_29vw313wsi().s[6]++;
      store[key] = value.toString();
    },
    clear: function () {
      cov_29vw313wsi().f[3]++;
      cov_29vw313wsi().s[7]++;
      store = {};
    },
    removeItem: function (key) {
      cov_29vw313wsi().f[4]++;
      cov_29vw313wsi().s[8]++;
      delete store[key];
    }
  };
}());
cov_29vw313wsi().s[9]++;
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsb2NhbFN0b3JhZ2VNb2NrIiwic3RhdHVzIiwic3RvcmUiLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiYWNjZXNzVG9rZW4iLCJleHBpcmVkRGF0ZSIsIkRhdGUiLCJub3ciLCJlbWFpbCIsImdldEl0ZW0iLCJrZXkiLCJzZXRJdGVtIiwidmFsdWUiLCJ0b1N0cmluZyIsImNsZWFyIiwicmVtb3ZlSXRlbSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93Il0sInNvdXJjZXMiOlsibG9jYWxTdG9yYWdlTW9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbG9jYWxTdG9yYWdlTW9jayA9IChmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgLy8gdmFyIHN0b3JlID0ge307XG4gICAgLy8gaWYoc3RhdHVzID09IFwiaGFzIHNlc3Npb25cIikge1xuICAgIC8vICAgICBjb25zdCBzdHIgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgLy8gICAgICAgICBhY2Nlc3NUb2tlbjogJ2FjY2Vzc1Rva2VuJyxcbiAgICAvLyAgICAgICAgIGV4cGlyZWREYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMTAwMCksXG4gICAgLy8gICAgICAgICBlbWFpbDogJ3NhbXBsZUVtYWlsQGdtYWlsLmNvbSdcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHN0b3JlID0ge1wibXlTZXNzaW9uXCI6IHN0cn07XG4gICAgLy8gfVxuICAgIC8vIGVsc2Ugc3RvcmUgPSB7fTtcblxuICAgIHZhciBzdG9yZSA9IHt9O1xuICAgIGNvbnN0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYWNjZXNzVG9rZW46ICdhY2Nlc3NUb2tlbicsXG4gICAgICAgIGV4cGlyZWREYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpIC0gMTAwMCksXG4gICAgICAgIGVtYWlsOiAnc2FtcGxlRW1haWxAZ21haWwuY29tJ1xuICAgIH0pO1xuICAgIHN0b3JlID0ge1wibXlTZXNzaW9uXCI6IHN0cn07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldEl0ZW06IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBzdG9yZVtrZXldID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0b3JlID0ge307XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUl0ZW06IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yZVtrZXldO1xuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnbG9jYWxTdG9yYWdlJywgeyB2YWx1ZTogbG9jYWxTdG9yYWdlTW9jayB9KTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7Ozs7Ozs7OztBQWZaLElBQUlBLGdCQUFnQiw2QkFBSSxVQUFVQyxNQUFWLEVBQWtCO0VBQUE7RUFDdEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQSxJQUFJQyxLQUFLLDZCQUFHLEVBQUgsQ0FBVDtFQUNBLE1BQU1DLEdBQUcsNkJBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0lBQ3ZCQyxXQUFXLEVBQUUsYUFEVTtJQUV2QkMsV0FBVyxFQUFFLElBQUlDLElBQUosQ0FBU0EsSUFBSSxDQUFDQyxHQUFMLEtBQWEsSUFBdEIsQ0FGVTtJQUd2QkMsS0FBSyxFQUFFO0VBSGdCLENBQWYsQ0FBSCxDQUFUO0VBYnNDO0VBa0J0Q1IsS0FBSyxHQUFHO0lBQUMsYUFBYUM7RUFBZCxDQUFSO0VBbEJzQztFQW9CdEMsT0FBTztJQUNIUSxPQUFPLEVBQUUsVUFBVUMsR0FBVixFQUFlO01BQUE7TUFBQTtNQUNwQixPQUFPVixLQUFLLENBQUNVLEdBQUQsQ0FBWjtJQUNILENBSEU7SUFJSEMsT0FBTyxFQUFFLFVBQVVELEdBQVYsRUFBZUUsS0FBZixFQUFzQjtNQUFBO01BQUE7TUFDM0JaLEtBQUssQ0FBQ1UsR0FBRCxDQUFMLEdBQWFFLEtBQUssQ0FBQ0MsUUFBTixFQUFiO0lBQ0gsQ0FORTtJQU9IQyxLQUFLLEVBQUUsWUFBWTtNQUFBO01BQUE7TUFDZmQsS0FBSyxHQUFHLEVBQVI7SUFDSCxDQVRFO0lBVUhlLFVBQVUsRUFBRSxVQUFVTCxHQUFWLEVBQWU7TUFBQTtNQUFBO01BQ3ZCLE9BQU9WLEtBQUssQ0FBQ1UsR0FBRCxDQUFaO0lBQ0g7RUFaRSxDQUFQO0FBY0gsQ0FsQ3NCLEVBQUgsQ0FBcEI7O0FBbUNBTSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLEVBQThCLGNBQTlCLEVBQThDO0VBQUVOLEtBQUssRUFBRWQ7QUFBVCxDQUE5QyJ9