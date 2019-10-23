/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/***** Module 1: Exercise 1 *****/\nvar Usuario =\n/*#__PURE__*/\nfunction () {\n  function Usuario(email, senha) {\n    _classCallCheck(this, Usuario);\n\n    this.email = email;\n    this.senha = senha;\n  }\n\n  _createClass(Usuario, [{\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this.admin ? true : false;\n    }\n  }]);\n\n  return Usuario;\n}();\n\nvar Admin =\n/*#__PURE__*/\nfunction (_Usuario) {\n  _inherits(Admin, _Usuario);\n\n  function Admin(email, senha) {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));\n    _this.admin = true;\n    return _this;\n  }\n\n  return Admin;\n}(Usuario);\n\nvar User1 = new Usuario('usuario@teste.com', 'senha123');\nvar Adm1 = new Admin('adminl@teste.com', 'senha123');\nconsole.log(\"\".concat(User1.email, \" - Admin: \").concat(User1.isAdmin()));\nconsole.log(\"\".concat(Adm1.email, \" - Admin: \").concat(Adm1.isAdmin()));\n/***** Module 1: Exercise 2 *****/\n\nvar usuarios = [{\n  nome: 'Diego',\n  idade: 23,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Gabriel',\n  idade: 15,\n  empresa: 'Rocketseat'\n}, {\n  nome: 'Lucas',\n  idade: 30,\n  empresa: 'Facebook'\n}]; // 2.1\n\nvar idades = usuarios.map(function (item) {\n  return item.idade;\n});\nconsole.log(idades); // 2.2\n\nvar empregadosMaiores = usuarios.filter(function (item) {\n  return item.idade > 18 && item.empresa === 'Rocketseat';\n});\nconsole.log(empregadosMaiores); // 2.3\n\nvar empregadoGoogle = usuarios.find(function (item) {\n  return item.empresa === 'Google';\n});\nconsole.log(empregadoGoogle); // 2.4\n\nvar novasIdades = usuarios.map(function (item) {\n  item.idade *= 2;\n  return item;\n});\nvar usuariosMenos50 = novasIdades.filter(function (item) {\n  return item.idade <= 50;\n});\nconsole.log(usuariosMenos50);\n/***** Module 1: Exercise 3 *****/\n// 3.1\n\nvar arr = [1, 2, 3, 4, 5];\nconsole.log(arr.map(function (item) {\n  return item + 10;\n})); // 3.2\n\nvar usuario = {\n  nome: 'Diego',\n  idade: 23\n};\n\nvar mostraIdade = function mostraIdade(usuario) {\n  return usuario.idade;\n};\n\nconsole.log(mostraIdade(usuario)); // 3.3\n\nvar nome = \"Diego\";\nvar idade = 23;\n\nvar mostraUsuario = function mostraUsuario() {\n  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';\n  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;\n  return {\n    nome: nome,\n    idade: idade\n  };\n};\n\nconsole.log(mostraUsuario(nome, idade));\nconsole.log(mostraUsuario(nome)); // 3.4\n\nvar promise = function promise() {\n  return new Promise(function (resolve, reject) {\n    return resolve();\n  });\n};\n/***** Module 1: Exercise 4 *****/\n// 4.1\n\n\nvar empresa = {\n  nome_empresa: 'Rocketseat',\n  endereco_empresa: {\n    cidade_empresa: 'Rio do Sul',\n    estado_empresa: 'SC'\n  }\n};\nvar nome_empresa = empresa.nome_empresa,\n    _empresa$endereco_emp = empresa.endereco_empresa,\n    cidade_empresa = _empresa$endereco_emp.cidade_empresa,\n    estado_empresa = _empresa$endereco_emp.estado_empresa;\nconsole.log(nome_empresa);\nconsole.log(cidade_empresa);\nconsole.log(estado_empresa); // 4.2\n\nfunction mostraInfo(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  return \"\".concat(nome, \" tem \").concat(idade, \" anos.\");\n}\n\nvar user = {\n  nome: 'Diego',\n  idade: 23\n};\nconsole.log(mostraInfo(user));\n/***** Module 1: Exercise 5 *****/\n// 5.1\n\nvar array = [1, 2, 3, 4, 5, 6];\nvar x = array[0],\n    y = array.slice(1);\nconsole.log(x);\nconsole.log(y); // 5.2\n\nvar usuario5 = {\n  nome: 'Diego',\n  idade: 23,\n  endereco: {\n    cidade: 'Rio do Sul',\n    uf: 'SC',\n    pais: 'Brasil'\n  }\n};\n\nvar usuario5_2 = _objectSpread({}, usuario5, {\n  nome: 'Gabriel'\n});\n\nvar usuario5_3 = _objectSpread({}, usuario5, {\n  nome: 'Lontras'\n});\n\nconsole.log(usuario5_2);\nconsole.log(usuario5_3);\n/***** Module 1: Exercise 6 *****/\n\nvar usuario6 = 'Diego';\nvar idade6 = 23;\nconsole.log(\"O usu\\xE1rio \".concat(usuario6, \" possui \").concat(idade6, \" anos\"));\n/***** Module 1: Exercise 7 *****/\n\nvar name = 'Diego';\nvar age = 23;\nvar usuario7 = {\n  name: name,\n  age: age,\n  city: 'Rio do Sul'\n};\nconsole.log(usuario7);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });