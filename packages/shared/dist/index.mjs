import {
  sha256
} from "./chunk-RCLI4ZCO.mjs";
import {
  AbiDecodingZeroDataError,
  BaseError,
  BytesSizeMismatchError,
  ChainDisconnectedError,
  ChainMismatchError,
  ChainNotFoundError,
  ContractFunctionExecutionError,
  ContractFunctionRevertedError,
  ContractFunctionZeroDataError,
  FeeCapTooHighError,
  HttpRequestError,
  InternalRpcError,
  InvalidAddressError,
  InvalidChainIdError,
  InvalidInputRpcError,
  InvalidLegacyVError,
  InvalidParamsRpcError,
  InvalidRequestRpcError,
  InvalidSerializableTransactionError,
  InvalidStorageKeySizeError,
  JsonRpcVersionUnsupportedError,
  LimitExceededRpcError,
  LruMap,
  MethodNotFoundRpcError,
  MethodNotSupportedRpcError,
  ParseRpcError,
  ProviderDisconnectedError,
  RawContractError,
  ResourceNotFoundRpcError,
  ResourceUnavailableRpcError,
  RpcRequestError,
  SwitchChainError,
  TipAboveFeeCapError,
  TransactionExecutionError,
  TransactionRejectedRpcError,
  UnauthorizedProviderError,
  UnknownNodeError,
  UnknownRpcError,
  UnsupportedProviderMethodError,
  UserRejectedRequestError,
  assertRequest,
  bytesRegex,
  bytesToHex,
  call,
  checksumAddress,
  concatHex,
  createCursor,
  decodeFunctionResult,
  defineFormatter,
  defineTransactionRequest,
  encodeDeployData,
  encodeFunctionData,
  extract,
  formatEther,
  formatGwei,
  formatTransactionRequest,
  formatUnits,
  getAddress,
  getChainContractAddress,
  getNodeError,
  hexToBigInt,
  hexToBytes,
  hexToNumber,
  hexToString,
  integerRegex,
  isAddress,
  isHex,
  keccak256,
  maxUint256,
  multicall3Abi,
  numberToHex,
  parseAccount,
  prettyPrint,
  serializeStateOverride,
  size,
  slice,
  stringToHex,
  stringify,
  toBytes,
  toHex,
  trim,
  weiUnits
} from "./chunk-CVQIUDT6.mjs";
import "./chunk-TMMZCNFH.mjs";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-XGB3TDIC.mjs";

// ../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var require_use_sync_external_store_shim_production = __commonJS({
  "../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(exports) {
    "use strict";
    var React8 = __require("react");
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    var useState6 = React8.useState;
    var useEffect9 = React8.useEffect;
    var useLayoutEffect = React8.useLayoutEffect;
    var useDebugValue = React8.useDebugValue;
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      var value = getSnapshot(), _useState = useState6({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
      useLayoutEffect(
        function() {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        },
        [subscribe, value, getSnapshot]
      );
      useEffect9(
        function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          return subscribe(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          });
        },
        [subscribe]
      );
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React8.useSyncExternalStore ? React8.useSyncExternalStore : shim;
  }
});

// ../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    "production" !== process.env.NODE_ENV && function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React8.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState6({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect9(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React8 = __require("react"), objectIs = "function" === typeof Object.is ? Object.is : is, useState6 = React8.useState, useEffect9 = React8.useEffect, useLayoutEffect = React8.useLayoutEffect, useDebugValue = React8.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React8.useSyncExternalStore ? React8.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// ../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_use_sync_external_store_shim_production();
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// ../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
var require_with_selector_production = __commonJS({
  "../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js"(exports) {
    "use strict";
    var React8 = __require("react");
    var shim = require_shim();
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    var useSyncExternalStore7 = shim.useSyncExternalStore;
    var useRef3 = React8.useRef;
    var useEffect9 = React8.useEffect;
    var useMemo2 = React8.useMemo;
    var useDebugValue = React8.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef3(null);
      if (null === instRef.current) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo2(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore7(subscribe, instRef[0], instRef[1]);
      useEffect9(
        function() {
          inst.hasValue = true;
          inst.value = value;
        },
        [value]
      );
      useDebugValue(value);
      return value;
    };
  }
});

// ../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    "production" !== process.env.NODE_ENV && function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React8 = __require("react"), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore7 = shim.useSyncExternalStore, useRef3 = React8.useRef, useEffect9 = React8.useEffect, useMemo2 = React8.useMemo, useDebugValue = React8.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef3(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo2(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore7(subscribe, instRef[0], instRef[1]);
        useEffect9(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }
});

// ../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "../../node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.1.0/node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_with_selector_production();
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// src/constants/regions.ts
var REGION_COLORS = {
  // Standard colors (main app)
  standard: {
    USA: "#4299E1",
    // blue
    Europe: "#48BB78",
    // green
    LatAm: "#F6AD55",
    // orange
    Africa: "#F56565",
    // red
    Asia: "#9F7AEA"
    // purple
  },
  // Enhanced colors (MiniPay/Diversifi)
  enhanced: {
    USA: "#3B82F6",
    // Enhanced blue
    Europe: "#22C55E",
    // Enhanced green
    LatAm: "#F59E0B",
    // Enhanced orange/yellow
    Africa: "#EF4444",
    // Enhanced red/terracotta
    Asia: "#D946EF"
    // Enhanced purple/pink
  }
};
function getRegionColors(environment = "standard") {
  return REGION_COLORS[environment];
}
var REGION_BG_COLORS = {
  USA: "#DBEAFE",
  // Light blue
  Europe: "#DCFCE7",
  // Light green
  LatAm: "#FEF3C7",
  // Light yellow
  Africa: "#FEE2E2",
  // Light red
  Asia: "#F5D0FE"
  // Light purple
};
var REGION_DARK_COLORS = {
  USA: "#1E40AF",
  // Dark blue
  Europe: "#15803D",
  // Dark green
  LatAm: "#B45309",
  // Dark orange
  Africa: "#B91C1C",
  // Dark red
  Asia: "#A21CAF"
  // Dark purple
};
var REGION_CONTRAST_COLORS = {
  USA: "#172554",
  // Very dark blue
  Europe: "#14532D",
  // Very dark green
  LatAm: "#78350F",
  // Very dark orange
  Africa: "#7F1D1D",
  // Very dark red
  Asia: "#701A75"
  // Very dark purple
};
var AVAILABLE_TOKENS = [
  // Mainnet tokens
  { symbol: "CUSD", name: "Celo Dollar", region: "USA" },
  { symbol: "CEUR", name: "Celo Euro", region: "Europe" },
  { symbol: "CREAL", name: "Celo Brazilian Real", region: "LatAm" },
  { symbol: "CKES", name: "Celo Kenyan Shilling", region: "Africa" },
  { symbol: "CCOP", name: "Celo Colombian Peso", region: "LatAm" },
  { symbol: "PUSO", name: "Philippine Peso", region: "Asia" },
  { symbol: "CGHS", name: "Celo Ghana Cedi", region: "Africa" },
  { symbol: "CXOF", name: "CFA Franc", region: "Africa" },
  // Mento v2.0 Alfajores tokens
  { symbol: "CPESO", name: "Philippine Peso", region: "Asia" },
  { symbol: "CGBP", name: "British Pound", region: "Europe" },
  { symbol: "CZAR", name: "South African Rand", region: "Africa" },
  { symbol: "CCAD", name: "Canadian Dollar", region: "USA" },
  { symbol: "CAUD", name: "Australian Dollar", region: "Asia" }
];
function getMockRegionData(environment = "standard") {
  const colors = getRegionColors(environment);
  return [
    { region: "USA", value: 25, color: colors.USA },
    { region: "Europe", value: 22, color: colors.Europe },
    { region: "LatAm", value: 18, color: colors.LatAm },
    { region: "Africa", value: 26, color: colors.Africa },
    { region: "Asia", value: 9, color: colors.Asia }
  ];
}
var EXCHANGE_RATES = {
  // Standard format - updated rates for mainnet tokens
  CUSD: 1,
  CEUR: 1.08,
  CREAL: 0.2,
  // 1 BRL = $0.20
  CKES: 78e-4,
  // 1 KES = $0.0078
  CCOP: 25e-5,
  // 1 COP = $0.00025
  PUSO: 0.0179,
  // 1 PHP = $0.0179
  CGHS: 0.069,
  // 1 GHS = $0.069
  CXOF: 16e-4,
  // 1 XOF = $0.0016
  // Mento v2.0 Alfajores tokens
  CPESO: 0.0179,
  // 1 PHP = $0.0179
  CGBP: 1.27,
  // 1 GBP = $1.27
  CZAR: 0.055,
  // 1 ZAR = $0.055
  CCAD: 0.74,
  // 1 CAD = $0.74
  CAUD: 0.66,
  // 1 AUD = $0.66
  // Lowercase versions for compatibility
  cusd: 1,
  ceur: 1.08,
  creal: 0.2,
  ckes: 78e-4,
  ccop: 25e-5,
  puso: 0.0179,
  cghs: 0.069,
  cxof: 16e-4,
  cpeso: 0.0179,
  cgbp: 1.27,
  czar: 0.055,
  ccad: 0.74,
  caud: 0.66
};
var MOCK_REGION_DATA = getMockRegionData("standard");

// src/utils/environment.ts
function isMiniPayEnvironment() {
  if (typeof window === "undefined") return false;
  const hasMiniPayProperty = window.ethereum && window.ethereum.isMiniPay === true;
  const userAgent = navigator.userAgent || "";
  const hasMiniPayUserAgent = userAgent.includes("MiniPay");
  const hasOperaMini = userAgent.includes("Opera Mini") || userAgent.includes("OPR");
  const urlParams = new URLSearchParams(window.location.search);
  const hasMiniPayParam = urlParams.get("minipay") === "true";
  const referrer = document.referrer || "";
  const hasMiniPayReferrer = referrer.includes("minipay.app") || referrer.includes("celo.org") || referrer.includes("opera.com");
  const isInIframe = window !== window.parent;
  if (typeof localStorage !== "undefined") {
    try {
      localStorage.setItem("minipay-detection", JSON.stringify({
        hasMiniPayProperty,
        hasMiniPayUserAgent,
        hasMiniPayParam,
        hasOperaMini,
        hasMiniPayReferrer,
        isInIframe,
        userAgent,
        referrer
      }));
    } catch (e) {
      console.error("Failed to log MiniPay detection to localStorage", e);
    }
  }
  console.log("MiniPay detection:", {
    hasMiniPayProperty,
    hasMiniPayUserAgent,
    hasMiniPayParam,
    hasOperaMini,
    hasMiniPayReferrer,
    isInIframe,
    userAgent,
    referrer
  });
  return hasMiniPayProperty || hasMiniPayUserAgent || hasMiniPayParam || isInIframe && (hasMiniPayReferrer || hasOperaMini);
}
function isMobileEnvironment() {
  if (typeof window === "undefined") return false;
  const isMobileWidth = window.innerWidth < 768;
  const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  return isMobileWidth || isMobileUserAgent;
}
function shouldRenderDiversiFiUI() {
  if (typeof window === "undefined") return false;
  const isInMiniPay = isMiniPayEnvironment();
  const isOnDiversiFiPath = window.location.pathname.startsWith("/diversifi");
  return isInMiniPay || isOnDiversiFiPath;
}
function getEnvironmentType() {
  return isMiniPayEnvironment() || shouldRenderDiversiFiUI() ? "enhanced" : "standard";
}
var AppEnvironment = {
  isMiniPay: isMiniPayEnvironment,
  isMobile: isMobileEnvironment,
  shouldRenderDiversiFi: shouldRenderDiversiFiUI,
  getType: getEnvironmentType,
  isMainApp: () => !isMiniPayEnvironment()
};

// src/utils/bundle-optimizer.ts
async function importForEnvironment(standardImport, enhancedImport) {
  const environment = AppEnvironment.getType();
  if (environment === "enhanced" && enhancedImport) {
    return enhancedImport();
  }
  return standardImport();
}
function shouldLoadFeature(feature) {
  const environment = AppEnvironment.getType();
  const featureFlags = {
    standard: {
      "advanced-charts": true,
      "complex-animations": true,
      "heavy-calculations": true,
      "full-wallet-features": true
    },
    enhanced: {
      "advanced-charts": false,
      // Lighter charts for MiniPay
      "complex-animations": false,
      // Simpler animations for performance
      "heavy-calculations": false,
      // Simplified calculations
      "full-wallet-features": false
      // Essential wallet features only
    }
  };
  return featureFlags[environment]?.[feature] ?? true;
}
function preloadResource(url, type = "script") {
  if (typeof document === "undefined") return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.href = url;
  switch (type) {
    case "script":
      link.as = "script";
      break;
    case "style":
      link.as = "style";
      break;
    case "font":
      link.as = "font";
      link.crossOrigin = "anonymous";
      break;
  }
  document.head.appendChild(link);
}
function isCriticalResource(resourceName) {
  const environment = AppEnvironment.getType();
  const criticalResources = {
    standard: [
      "wallet-connection",
      "basic-charts",
      "core-swap",
      "authentication"
    ],
    enhanced: [
      "minipay-wallet",
      "simple-charts",
      "celo-swap",
      "auto-connect"
    ]
  };
  return criticalResources[environment].includes(resourceName);
}
function getBundleStrategy() {
  const environment = AppEnvironment.getType();
  return {
    environment,
    strategy: environment === "enhanced" ? "minimal" : "full",
    chunkSizeLimit: environment === "enhanced" ? 5e4 : 1e5,
    // bytes
    preloadCritical: true,
    lazyLoadNonCritical: true,
    enableTreeShaking: true,
    minifyForProduction: true
  };
}
var PerformanceMonitor = class _PerformanceMonitor {
  static instance;
  metrics = /* @__PURE__ */ new Map();
  static getInstance() {
    if (!_PerformanceMonitor.instance) {
      _PerformanceMonitor.instance = new _PerformanceMonitor();
    }
    return _PerformanceMonitor.instance;
  }
  startTiming(label) {
    if (typeof performance !== "undefined") {
      this.metrics.set(`${label}_start`, performance.now());
    }
  }
  endTiming(label) {
    if (typeof performance !== "undefined") {
      const start = this.metrics.get(`${label}_start`);
      if (start !== void 0) {
        const duration = performance.now() - start;
        this.metrics.set(`${label}_duration`, duration);
        return duration;
      }
    }
    return 0;
  }
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
  logMetrics() {
    const environment = AppEnvironment.getType();
    console.log(`Performance Metrics (${environment}):`, this.getMetrics());
  }
};
function getOptimizationHints() {
  const environment = AppEnvironment.getType();
  return {
    environment,
    hints: {
      prefetchNextPage: environment === "standard",
      enableServiceWorker: environment === "standard",
      useWebWorkers: environment === "standard",
      enableOfflineMode: environment === "enhanced",
      // MiniPay might have connectivity issues
      prioritizeSpeed: environment === "enhanced",
      prioritizeFeatures: environment === "standard"
    }
  };
}

// src/components/charts/CurrencyPerformanceChart.tsx
import React, { useEffect, useRef } from "react";
function CurrencyPerformanceChart({
  data,
  title = "Currency Performance",
  height = 400,
  showLegend = true,
  environment
}) {
  const canvasRef = useRef(null);
  const chartEnvironment = environment || AppEnvironment.getType();
  const REGION_COLORS2 = getRegionColors(chartEnvironment);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data.currencies.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, rect.width, rect.height);
    const padding = 60;
    const chartWidth = rect.width - 2 * padding;
    const chartHeight = rect.height - 2 * padding - (showLegend ? 60 : 0);
    const allValues = data.currencies.flatMap((currency) => currency.values);
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const valueRange = maxValue - minValue;
    const getX = (index2) => padding + index2 / (data.dates.length - 1) * chartWidth;
    const getY = (value) => padding + chartHeight - (value - minValue) / valueRange * chartHeight;
    ctx.strokeStyle = chartEnvironment === "enhanced" ? "#E5E7EB" : "#F3F4F6";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + i / 5 * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + chartWidth, y);
      ctx.stroke();
    }
    const gridCount = Math.min(data.dates.length - 1, 6);
    for (let i = 0; i <= gridCount; i++) {
      const x = padding + i / gridCount * chartWidth;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, padding + chartHeight);
      ctx.stroke();
    }
    data.currencies.forEach((currency, currencyIndex) => {
      const color = REGION_COLORS2[currency.region] || "#A0AEC0";
      ctx.strokeStyle = color;
      ctx.lineWidth = chartEnvironment === "enhanced" ? 3 : 2;
      ctx.beginPath();
      currency.values.forEach((value, index2) => {
        const x = getX(index2);
        const y = getY(value);
        if (index2 === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();
      ctx.fillStyle = color;
      currency.values.forEach((value, index2) => {
        const x = getX(index2);
        const y = getY(value);
        ctx.beginPath();
        ctx.arc(x, y, chartEnvironment === "enhanced" ? 4 : 3, 0, 2 * Math.PI);
        ctx.fill();
      });
    });
    ctx.strokeStyle = chartEnvironment === "enhanced" ? "#374151" : "#6B7280";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    ctx.fillStyle = chartEnvironment === "enhanced" ? "#1F2937" : "#4B5563";
    ctx.font = `${chartEnvironment === "enhanced" ? "12" : "11"}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    ctx.textAlign = "center";
    const labelCount = Math.min(data.dates.length, 6);
    for (let i = 0; i < labelCount; i++) {
      const dateIndex = Math.floor(i / (labelCount - 1) * (data.dates.length - 1));
      const x = getX(dateIndex);
      const date = new Date(data.dates[dateIndex]);
      const label = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      ctx.fillText(label, x, padding + chartHeight + 20);
    }
    ctx.textAlign = "right";
    for (let i = 0; i <= 5; i++) {
      const value = minValue + i / 5 * valueRange;
      const y = padding + chartHeight - i / 5 * chartHeight;
      ctx.fillText(value.toFixed(2), padding - 10, y + 4);
    }
    if (title) {
      ctx.fillStyle = chartEnvironment === "enhanced" ? "#111827" : "#1F2937";
      ctx.font = `bold ${chartEnvironment === "enhanced" ? "16" : "14"}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(title, rect.width / 2, 25);
    }
    if (showLegend) {
      const legendY = padding + chartHeight + 45;
      const legendItemWidth = chartWidth / data.currencies.length;
      data.currencies.forEach((currency, index2) => {
        const x = padding + index2 * legendItemWidth + legendItemWidth / 2;
        const color = REGION_COLORS2[currency.region] || "#A0AEC0";
        ctx.fillStyle = color;
        ctx.fillRect(x - 25, legendY - 8, 16, 16);
        ctx.fillStyle = chartEnvironment === "enhanced" ? "#1F2937" : "#4B5563";
        ctx.font = `${chartEnvironment === "enhanced" ? "12" : "11"}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText(
          `${currency.symbol} (${currency.percentChange >= 0 ? "+" : ""}${currency.percentChange.toFixed(1)}%)`,
          x - 5,
          legendY + 4
        );
      });
    }
  }, [data, title, height, showLegend, chartEnvironment, REGION_COLORS2]);
  return /* @__PURE__ */ React.createElement("div", { className: "w-full" }, /* @__PURE__ */ React.createElement(
    "canvas",
    {
      ref: canvasRef,
      style: { width: "100%", height: `${height}px` },
      className: `rounded-lg ${chartEnvironment === "enhanced" ? "bg-white shadow-lg" : "bg-gray-50"}`
    }
  ), data.source && /* @__PURE__ */ React.createElement("p", { className: `text-xs mt-2 ${chartEnvironment === "enhanced" ? "text-gray-600" : "text-gray-500"}` }, "Data source: ", data.source === "api" ? "Live API" : "Cached"));
}

// src/hooks/use-wallet-base.ts
import { useState, useEffect as useEffect2, useCallback } from "react";

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/getAction.js
function getAction(client, actionFn, name) {
  const action_implicit = client[actionFn.name];
  if (typeof action_implicit === "function")
    return action_implicit;
  const action_explicit = client[name];
  if (typeof action_explicit === "function")
    return action_explicit;
  return (params) => actionFn(client, params);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/errors/getContractError.js
var EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender }) {
  const error = err instanceof RawContractError ? err : err instanceof BaseError ? err.walk((err2) => "data" in err2) || err.walk() : {};
  const { code, data, details, message, shortMessage } = error;
  const cause = (() => {
    if (err instanceof AbiDecodingZeroDataError)
      return new ContractFunctionZeroDataError({ functionName });
    if ([EXECUTION_REVERTED_ERROR_CODE, InternalRpcError.code].includes(code) && (data || details || message || shortMessage)) {
      return new ContractFunctionRevertedError({
        abi,
        data: typeof data === "object" ? data.data : data,
        functionName,
        message: error instanceof RpcRequestError ? details : shortMessage ?? message
      });
    }
    return err;
  })();
  return new ContractFunctionExecutionError(cause, {
    abi,
    args,
    contractAddress: address,
    docsPath,
    functionName,
    sender
  });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
function publicKeyToAddress(publicKey) {
  const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address}`);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/recoverPublicKey.js
async function recoverPublicKey({ hash, signature }) {
  const hashHex = isHex(hash) ? hash : toHex(hash);
  const { secp256k1 } = await import("./secp256k1-YDMYNHZA.mjs");
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r, s, v, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = isHex(signature) ? signature : toHex(signature);
    const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/encoding/toRlp.js
function toRlp(bytes, to = "hex") {
  const encodable = getEncodable(bytes);
  const cursor = createCursor(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (to === "hex")
    return bytesToHex(cursor.bytes);
  return cursor.bytes;
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode } of list) {
        encode(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/experimental/eip7702/utils/hashAuthorization.js
function hashAuthorization(parameters) {
  const { chainId, contractAddress, nonce, to } = parameters;
  const hash = keccak256(concatHex([
    "0x05",
    toRlp([
      chainId ? numberToHex(chainId) : "0x",
      contractAddress,
      nonce ? numberToHex(nonce) : "0x"
    ])
  ]));
  if (to === "bytes")
    return hexToBytes(hash);
  return hash;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/experimental/eip7702/utils/recoverAuthorizationAddress.js
async function recoverAuthorizationAddress(parameters) {
  const { authorization, signature } = parameters;
  return recoverAddress({
    hash: hashAuthorization(authorization),
    signature: signature ?? authorization
  });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/estimateGas.js
var EstimateGasExecutionError = class extends BaseError {
  constructor(cause, { account, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
    const prettyArgs = prettyPrint({
      from: account?.address,
      to,
      value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
      data,
      gas,
      gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
      maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
      maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
      nonce
    });
    super(cause.shortMessage, {
      cause,
      docsPath,
      metaMessages: [
        ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        prettyArgs
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cause = cause;
  }
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/errors/getEstimateGasError.js
function getEstimateGasError(err, { docsPath, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new EstimateGasExecutionError(cause, {
    docsPath,
    ...args
  });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/fee.js
var BaseFeeScalarError = class extends BaseError {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
};
var Eip1559FeesNotSupportedError = class extends BaseError {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
};
var MaxFeePerGasTooLowError = class extends BaseError {
  constructor({ maxPriorityFeePerGas }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${formatGwei(maxPriorityFeePerGas)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/block.js
var BlockNotFoundError = class extends BaseError {
  constructor({ blockHash, blockNumber }) {
    let identifier = "Block";
    if (blockHash)
      identifier = `Block at hash "${blockHash}"`;
    if (blockNumber)
      identifier = `Block at number "${blockNumber}"`;
    super(`${identifier} could not be found.`, { name: "BlockNotFoundError" });
  }
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/formatters/transaction.js
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  if (transaction.authorizationList)
    transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  if (transaction_.type === "eip1559") {
    delete transaction_.maxFeePerBlobGas;
  }
  return transaction_;
}
var defineTransaction = /* @__PURE__ */ defineFormatter("transaction", formatTransaction);
function formatAuthorizationList(authorizationList) {
  return authorizationList.map((authorization) => ({
    contractAddress: authorization.address,
    chainId: Number(authorization.chainId),
    nonce: Number(authorization.nonce),
    r: authorization.r,
    s: authorization.s,
    yParity: Number(authorization.yParity)
  }));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  const transactions = (block.transactions ?? []).map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = /* @__PURE__ */ defineFormatter("block", formatBlock);

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getBlock.js
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
  const blockTag = blockTag_ ?? "latest";
  const includeTransactions = includeTransactions_ ?? false;
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let block = null;
  if (blockHash) {
    block = await client.request({
      method: "eth_getBlockByHash",
      params: [blockHash, includeTransactions]
    }, { dedupe: true });
  } else {
    block = await client.request({
      method: "eth_getBlockByNumber",
      params: [blockNumberHex || blockTag, includeTransactions]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  if (!block)
    throw new BlockNotFoundError({ blockHash, blockNumber });
  const format = client.chain?.formatters?.block?.format || formatBlock;
  return format(block);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getGasPrice.js
async function getGasPrice(client) {
  const gasPrice = await client.request({
    method: "eth_gasPrice"
  });
  return BigInt(gasPrice);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
async function internal_estimateMaxPriorityFeePerGas(client, args) {
  const { block: block_, chain = client.chain, request } = args || {};
  try {
    const maxPriorityFeePerGas = chain?.fees?.maxPriorityFeePerGas ?? chain?.fees?.defaultPriorityFee;
    if (typeof maxPriorityFeePerGas === "function") {
      const block = block_ || await getAction(client, getBlock, "getBlock")({});
      const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
        block,
        client,
        request
      });
      if (maxPriorityFeePerGas_ === null)
        throw new Error();
      return maxPriorityFeePerGas_;
    }
    if (typeof maxPriorityFeePerGas !== "undefined")
      return maxPriorityFeePerGas;
    const maxPriorityFeePerGasHex = await client.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return hexToBigInt(maxPriorityFeePerGasHex);
  } catch {
    const [block, gasPrice] = await Promise.all([
      block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}),
      getAction(client, getGasPrice, "getGasPrice")({})
    ]);
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
    if (maxPriorityFeePerGas < 0n)
      return 0n;
    return maxPriorityFeePerGas;
  }
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js
async function internal_estimateFeesPerGas(client, args) {
  const { block: block_, chain = client.chain, request, type = "eip1559" } = args || {};
  const baseFeeMultiplier = await (async () => {
    if (typeof chain?.fees?.baseFeeMultiplier === "function")
      return chain.fees.baseFeeMultiplier({
        block: block_,
        client,
        request
      });
    return chain?.fees?.baseFeeMultiplier ?? 1.2;
  })();
  if (baseFeeMultiplier < 1)
    throw new BaseFeeScalarError();
  const decimals = baseFeeMultiplier.toString().split(".")[1]?.length ?? 0;
  const denominator = 10 ** decimals;
  const multiply = (base) => base * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
  const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
  if (typeof chain?.fees?.estimateFeesPerGas === "function") {
    const fees2 = await chain.fees.estimateFeesPerGas({
      block: block_,
      client,
      multiply,
      request,
      type
    });
    if (fees2 !== null)
      return fees2;
  }
  if (type === "eip1559") {
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = typeof request?.maxPriorityFeePerGas === "bigint" ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
      block,
      chain,
      request
    });
    const baseFeePerGas = multiply(block.baseFeePerGas);
    const maxFeePerGas = request?.maxFeePerGas ?? baseFeePerGas + maxPriorityFeePerGas;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const gasPrice = request?.gasPrice ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({}));
  return {
    gasPrice
  };
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getTransactionCount.js
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, blockNumber ? numberToHex(blockNumber) : blockTag]
  }, { dedupe: Boolean(blockNumber) });
  return hexToNumber(count);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/blobsToCommitments.js
function blobsToCommitments(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = [];
  for (const blob of blobs)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return to === "bytes" ? commitments : commitments.map((x) => bytesToHex(x));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/blobsToProofs.js
function blobsToProofs(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments;
  const proofs = [];
  for (let i = 0; i < blobs.length; i++) {
    const blob = blobs[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return to === "bytes" ? proofs : proofs.map((x) => bytesToHex(x));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/hash/sha256.js
function sha2562(value, to_) {
  const to = to_ || "hex";
  const bytes = sha256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
function commitmentToVersionedHash(parameters) {
  const { commitment, version: version3 = 1 } = parameters;
  const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
  const versionedHash = sha2562(commitment, "bytes");
  versionedHash.set([version3], 0);
  return to === "bytes" ? versionedHash : bytesToHex(versionedHash);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js
function commitmentsToVersionedHashes(parameters) {
  const { commitments, version: version3 } = parameters;
  const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash({
      commitment,
      to,
      version: version3
    }));
  }
  return hashes;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/constants/kzg.js
var versionedHashVersionKzg = 1;

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/blob.js
var BlobSizeTooLargeError = class extends BaseError {
  constructor({ maxSize, size: size3 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size3} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
};
var EmptyBlobError = class extends BaseError {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
};
var InvalidVersionedHashSizeError = class extends BaseError {
  constructor({ hash, size: size3 }) {
    super(`Versioned hash "${hash}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${size3}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
};
var InvalidVersionedHashVersionError = class extends BaseError {
  constructor({ hash, version: version3 }) {
    super(`Versioned hash "${hash}" version is invalid.`, {
      metaMessages: [
        `Expected: ${versionedHashVersionKzg}`,
        `Received: ${version3}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/toBlobs.js
function toBlobs(parameters) {
  const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
  const data = typeof parameters.data === "string" ? hexToBytes(parameters.data) : parameters.data;
  const size_ = size(data);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active = true;
  let position = 0;
  while (active) {
    const blob = createCursor(new Uint8Array(bytesPerBlob));
    let size3 = 0;
    while (size3 < fieldElementsPerBlob) {
      const bytes = data.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes);
      if (bytes.length < 31) {
        blob.pushByte(128);
        active = false;
        break;
      }
      size3++;
      position += 31;
    }
    blobs.push(blob);
  }
  return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex(x.bytes));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/blob/toBlobSidecars.js
function toBlobSidecars(parameters) {
  const { data, kzg, to } = parameters;
  const blobs = parameters.blobs ?? toBlobs({ data, to });
  const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg, to });
  const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg, to });
  const sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/getTransactionType.js
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.authorizationList !== "undefined")
    return "eip7702";
  if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined")
    return "eip4844";
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") {
    return "eip1559";
  }
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new InvalidSerializableTransactionError({ transaction });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getChainId.js
async function getChainId(client) {
  const chainIdHex = await client.request({
    method: "eth_chainId"
  }, { dedupe: true });
  return hexToNumber(chainIdHex);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
var defaultParameters = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
var eip1559NetworkCache = /* @__PURE__ */ new Map();
async function prepareTransactionRequest(client, args) {
  const { account: account_ = client.account, blobs, chain, gas, kzg, nonce, nonceManager, parameters = defaultParameters, type } = args;
  const account = account_ ? parseAccount(account_) : account_;
  const request = { ...args, ...account ? { from: account?.address } : {} };
  let block;
  async function getBlock2() {
    if (block)
      return block;
    block = await getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
    return block;
  }
  let chainId;
  async function getChainId3() {
    if (chainId)
      return chainId;
    if (chain)
      return chain.id;
    if (typeof args.chainId !== "undefined")
      return args.chainId;
    const chainId_ = await getAction(client, getChainId, "getChainId")({});
    chainId = chainId_;
    return chainId;
  }
  if (parameters.includes("nonce") && typeof nonce === "undefined" && account) {
    if (nonceManager) {
      const chainId2 = await getChainId3();
      request.nonce = await nonceManager.consume({
        address: account.address,
        chainId: chainId2,
        client
      });
    } else {
      request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
        address: account.address,
        blockTag: "pending"
      });
    }
  }
  if ((parameters.includes("blobVersionedHashes") || parameters.includes("sidecars")) && blobs && kzg) {
    const commitments = blobsToCommitments({ blobs, kzg });
    if (parameters.includes("blobVersionedHashes")) {
      const versionedHashes = commitmentsToVersionedHashes({
        commitments,
        to: "hex"
      });
      request.blobVersionedHashes = versionedHashes;
    }
    if (parameters.includes("sidecars")) {
      const proofs = blobsToProofs({ blobs, commitments, kzg });
      const sidecars = toBlobSidecars({
        blobs,
        commitments,
        proofs,
        to: "hex"
      });
      request.sidecars = sidecars;
    }
  }
  if (parameters.includes("chainId"))
    request.chainId = await getChainId3();
  if ((parameters.includes("fees") || parameters.includes("type")) && typeof type === "undefined") {
    try {
      request.type = getTransactionType(request);
    } catch {
      let isEip1559Network = eip1559NetworkCache.get(client.uid);
      if (typeof isEip1559Network === "undefined") {
        const block2 = await getBlock2();
        isEip1559Network = typeof block2?.baseFeePerGas === "bigint";
        eip1559NetworkCache.set(client.uid, isEip1559Network);
      }
      request.type = isEip1559Network ? "eip1559" : "legacy";
    }
  }
  if (parameters.includes("fees")) {
    if (request.type !== "legacy" && request.type !== "eip2930") {
      if (typeof request.maxFeePerGas === "undefined" || typeof request.maxPriorityFeePerGas === "undefined") {
        const block2 = await getBlock2();
        const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
          block: block2,
          chain,
          request
        });
        if (typeof args.maxPriorityFeePerGas === "undefined" && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas)
          throw new MaxFeePerGasTooLowError({
            maxPriorityFeePerGas
          });
        request.maxPriorityFeePerGas = maxPriorityFeePerGas;
        request.maxFeePerGas = maxFeePerGas;
      }
    } else {
      if (typeof args.maxFeePerGas !== "undefined" || typeof args.maxPriorityFeePerGas !== "undefined")
        throw new Eip1559FeesNotSupportedError();
      if (typeof args.gasPrice === "undefined") {
        const block2 = await getBlock2();
        const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
          block: block2,
          chain,
          request,
          type: "legacy"
        });
        request.gasPrice = gasPrice_;
      }
    }
  }
  if (parameters.includes("gas") && typeof gas === "undefined")
    request.gas = await getAction(client, estimateGas, "estimateGas")({
      ...request,
      account: account ? { address: account.address, type: "json-rpc" } : account
    });
  assertRequest(request);
  delete request.parameters;
  return request;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getBalance.js
async function getBalance(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const balance = await client.request({
    method: "eth_getBalance",
    params: [address, blockNumberHex || blockTag]
  });
  return BigInt(balance);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/estimateGas.js
async function estimateGas(client, args) {
  const { account: account_ = client.account } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  try {
    let estimateGas_rpc2 = function(parameters) {
      const { block: block2, request: request2, rpcStateOverride: rpcStateOverride2 } = parameters;
      return client.request({
        method: "eth_estimateGas",
        params: rpcStateOverride2 ? [request2, block2 ?? "latest", rpcStateOverride2] : block2 ? [request2, block2] : [request2]
      });
    };
    var estimateGas_rpc = estimateGas_rpc2;
    const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = await prepareTransactionRequest(client, {
      ...args,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        account?.type === "local" ? void 0 : ["blobVersionedHashes"]
      )
    });
    const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const rpcStateOverride = serializeStateOverride(stateOverride);
    const to = await (async () => {
      if (rest.to)
        return rest.to;
      if (authorizationList && authorizationList.length > 0)
        return await recoverAuthorizationAddress({
          authorization: authorizationList[0]
        }).catch(() => {
          throw new BaseError("`to` is required. Could not infer from `authorizationList`");
        });
      return void 0;
    })();
    assertRequest(args);
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      from: account?.address,
      accessList,
      authorizationList,
      blobs,
      blobVersionedHashes,
      data,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    let estimate = BigInt(await estimateGas_rpc2({ block, request, rpcStateOverride }));
    if (authorizationList) {
      const value2 = await getBalance(client, { address: request.from });
      const estimates = await Promise.all(authorizationList.map(async (authorization) => {
        const { contractAddress } = authorization;
        const estimate2 = await estimateGas_rpc2({
          block,
          request: {
            authorizationList: void 0,
            data,
            from: account?.address,
            to: contractAddress,
            value: numberToHex(value2)
          },
          rpcStateOverride
        }).catch(() => 100000n);
        return 2n * BigInt(estimate2);
      }));
      estimate += estimates.reduce((acc, curr) => acc + curr, 0n);
    }
    return estimate;
  } catch (err) {
    throw getEstimateGasError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/readContract.js
async function readContract(client, parameters) {
  const { abi, address, args, functionName, ...rest } = parameters;
  const calldata = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const { data } = await getAction(client, call, "call")({
      ...rest,
      data: calldata,
      to: address
    });
    return decodeFunctionResult({
      abi,
      args,
      functionName,
      data: data || "0x"
    });
  } catch (error) {
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/readContract",
      functionName
    });
  }
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/wait.js
async function wait(time) {
  return new Promise((res) => setTimeout(res, time));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/account.js
var AccountNotFoundError = class extends BaseError {
  constructor({ docsPath } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
    ].join("\n"), {
      docsPath,
      docsSlug: "account",
      name: "AccountNotFoundError"
    });
  }
};
var AccountTypeNotSupportedError = class extends BaseError {
  constructor({ docsPath, metaMessages, type }) {
    super(`Account type "${type}" is not supported.`, {
      docsPath,
      metaMessages,
      name: "AccountTypeNotSupportedError"
    });
  }
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/chain/assertCurrentChain.js
function assertCurrentChain({ chain, currentChainId }) {
  if (!chain)
    throw new ChainNotFoundError();
  if (currentChainId !== chain.id)
    throw new ChainMismatchError({ chain, currentChainId });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/errors/getTransactionError.js
function getTransactionError(err, { docsPath, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new TransactionExecutionError(cause, {
    docsPath,
    ...args
  });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js
async function sendRawTransaction(client, { serializedTransaction }) {
  return client.request({
    method: "eth_sendRawTransaction",
    params: [serializedTransaction]
  }, { retryCount: 0 });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/sendTransaction.js
var supportsWalletNamespace = new LruMap(128);
async function sendTransaction(client, parameters) {
  const { account: account_ = client.account, chain = client.chain, accessList, authorizationList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, ...rest } = parameters;
  if (typeof account_ === "undefined")
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const account = account_ ? parseAccount(account_) : null;
  try {
    assertRequest(parameters);
    const to = await (async () => {
      if (parameters.to)
        return parameters.to;
      if (parameters.to === null)
        return void 0;
      if (authorizationList && authorizationList.length > 0)
        return await recoverAuthorizationAddress({
          authorization: authorizationList[0]
        }).catch(() => {
          throw new BaseError("`to` is required. Could not infer from `authorizationList`.");
        });
      return void 0;
    })();
    if (account?.type === "json-rpc" || account === null) {
      let chainId;
      if (chain !== null) {
        chainId = await getAction(client, getChainId, "getChainId")({});
        assertCurrentChain({
          currentChainId: chainId,
          chain
        });
      }
      const chainFormat = client.chain?.formatters?.transactionRequest?.format;
      const format = chainFormat || formatTransactionRequest;
      const request = format({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...extract(rest, { format: chainFormat }),
        accessList,
        authorizationList,
        blobs,
        chainId,
        data,
        from: account?.address,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value
      });
      const isWalletNamespaceSupported = supportsWalletNamespace.get(client.uid);
      const method = isWalletNamespaceSupported ? "wallet_sendTransaction" : "eth_sendTransaction";
      try {
        return await client.request({
          method,
          params: [request]
        }, { retryCount: 0 });
      } catch (e) {
        if (isWalletNamespaceSupported === false)
          throw e;
        const error = e;
        if (error.name === "InvalidInputRpcError" || error.name === "InvalidParamsRpcError" || error.name === "MethodNotFoundRpcError" || error.name === "MethodNotSupportedRpcError") {
          return await client.request({
            method: "wallet_sendTransaction",
            params: [request]
          }, { retryCount: 0 }).then((hash) => {
            supportsWalletNamespace.set(client.uid, true);
            return hash;
          }).catch((e2) => {
            const walletNamespaceError = e2;
            if (walletNamespaceError.name === "MethodNotFoundRpcError" || walletNamespaceError.name === "MethodNotSupportedRpcError") {
              supportsWalletNamespace.set(client.uid, false);
              throw error;
            }
            throw walletNamespaceError;
          });
        }
        throw error;
      }
    }
    if (account?.type === "local") {
      const request = await getAction(client, prepareTransactionRequest, "prepareTransactionRequest")({
        account,
        accessList,
        authorizationList,
        blobs,
        chain,
        data,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        nonceManager: account.nonceManager,
        parameters: [...defaultParameters, "sidecars"],
        value,
        ...rest,
        to
      });
      const serializer = chain?.serializers?.transaction;
      const serializedTransaction = await account.signTransaction(request, {
        serializer
      });
      return await getAction(client, sendRawTransaction, "sendRawTransaction")({
        serializedTransaction
      });
    }
    if (account?.type === "smart")
      throw new AccountTypeNotSupportedError({
        metaMessages: [
          "Consider using the `sendUserOperation` Action instead."
        ],
        docsPath: "/docs/actions/bundler/sendUserOperation",
        type: "smart"
      });
    throw new AccountTypeNotSupportedError({
      docsPath: "/docs/actions/wallet/sendTransaction",
      type: account?.type
    });
  } catch (err) {
    if (err instanceof AccountTypeNotSupportedError)
      throw err;
    throw getTransactionError(err, {
      ...parameters,
      account,
      chain: parameters.chain || void 0
    });
  }
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/writeContract.js
async function writeContract(client, parameters) {
  const { abi, account: account_ = client.account, address, args, dataSuffix, functionName, ...request } = parameters;
  if (typeof account_ === "undefined")
    throw new AccountNotFoundError({
      docsPath: "/docs/contract/writeContract"
    });
  const account = account_ ? parseAccount(account_) : null;
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    return await getAction(client, sendTransaction, "sendTransaction")({
      data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      account,
      ...request
    });
  } catch (error) {
    throw getContractError(error, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/writeContract",
      functionName,
      sender: account?.address
    });
  }
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/addChain.js
async function addChain(client, { chain }) {
  const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
  await client.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: numberToHex(id),
        chainName: name,
        nativeCurrency,
        rpcUrls: rpcUrls.default.http,
        blockExplorerUrls: blockExplorers ? Object.values(blockExplorers).map(({ url }) => url) : void 0
      }
    ]
  }, { dedupe: true, retryCount: 0 });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/uid.js
var size2 = 256;
var index = size2;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size2 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size2; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/createClient.js
function createClient(parameters) {
  const { batch, cacheTime = parameters.pollingInterval ?? 4e3, ccipRead, key = "base", name = "Base Client", pollingInterval = 4e3, type = "base" } = parameters;
  const chain = parameters.chain;
  const account = parameters.account ? parseAccount(parameters.account) : void 0;
  const { config, request, value } = parameters.transport({
    chain,
    pollingInterval
  });
  const transport = { ...config, ...value };
  const client = {
    account,
    batch,
    cacheTime,
    ccipRead,
    chain,
    key,
    name,
    pollingInterval,
    request,
    transport,
    type,
    uid: uid()
  };
  function extend(base) {
    return (extendFn) => {
      const extended = extendFn(base);
      for (const key2 in client)
        delete extended[key2];
      const combined = { ...base, ...extended };
      return Object.assign(combined, { extend: extend(combined) });
    };
  }
  return Object.assign(client, { extend: extend(client) });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/promise/withDedupe.js
var promiseCache = /* @__PURE__ */ new LruMap(8192);
function withDedupe(fn, { enabled = true, id }) {
  if (!enabled || !id)
    return fn();
  if (promiseCache.get(id))
    return promiseCache.get(id);
  const promise = fn().finally(() => promiseCache.delete(id));
  promiseCache.set(id, promise);
  return promise;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/promise/withRetry.js
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry: shouldRetry2 = () => true } = {}) {
  return new Promise((resolve, reject) => {
    const attemptRetry = async ({ count = 0 } = {}) => {
      const retry = async ({ error }) => {
        const delay = typeof delay_ === "function" ? delay_({ count, error }) : delay_;
        if (delay)
          await wait(delay);
        attemptRetry({ count: count + 1 });
      };
      try {
        const data = await fn();
        resolve(data);
      } catch (err) {
        if (count < retryCount && await shouldRetry2({ count, error: err }))
          return retry({ error: err });
        reject(err);
      }
    };
    attemptRetry();
  });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/buildRequest.js
function buildRequest(request, options = {}) {
  return async (args, overrideOptions = {}) => {
    const { dedupe = false, methods, retryDelay = 150, retryCount = 3, uid: uid2 } = {
      ...options,
      ...overrideOptions
    };
    const { method } = args;
    if (methods?.exclude?.includes(method))
      throw new MethodNotSupportedRpcError(new Error("method not supported"), {
        method
      });
    if (methods?.include && !methods.include.includes(method))
      throw new MethodNotSupportedRpcError(new Error("method not supported"), {
        method
      });
    const requestId = dedupe ? stringToHex(`${uid2}.${stringify(args)}`) : void 0;
    return withDedupe(() => withRetry(async () => {
      try {
        return await request(args);
      } catch (err_) {
        const err = err_;
        switch (err.code) {
          // -32700
          case ParseRpcError.code:
            throw new ParseRpcError(err);
          // -32600
          case InvalidRequestRpcError.code:
            throw new InvalidRequestRpcError(err);
          // -32601
          case MethodNotFoundRpcError.code:
            throw new MethodNotFoundRpcError(err, { method: args.method });
          // -32602
          case InvalidParamsRpcError.code:
            throw new InvalidParamsRpcError(err);
          // -32603
          case InternalRpcError.code:
            throw new InternalRpcError(err);
          // -32000
          case InvalidInputRpcError.code:
            throw new InvalidInputRpcError(err);
          // -32001
          case ResourceNotFoundRpcError.code:
            throw new ResourceNotFoundRpcError(err);
          // -32002
          case ResourceUnavailableRpcError.code:
            throw new ResourceUnavailableRpcError(err);
          // -32003
          case TransactionRejectedRpcError.code:
            throw new TransactionRejectedRpcError(err);
          // -32004
          case MethodNotSupportedRpcError.code:
            throw new MethodNotSupportedRpcError(err, {
              method: args.method
            });
          // -32005
          case LimitExceededRpcError.code:
            throw new LimitExceededRpcError(err);
          // -32006
          case JsonRpcVersionUnsupportedError.code:
            throw new JsonRpcVersionUnsupportedError(err);
          // 4001
          case UserRejectedRequestError.code:
            throw new UserRejectedRequestError(err);
          // 4100
          case UnauthorizedProviderError.code:
            throw new UnauthorizedProviderError(err);
          // 4200
          case UnsupportedProviderMethodError.code:
            throw new UnsupportedProviderMethodError(err);
          // 4900
          case ProviderDisconnectedError.code:
            throw new ProviderDisconnectedError(err);
          // 4901
          case ChainDisconnectedError.code:
            throw new ChainDisconnectedError(err);
          // 4902
          case SwitchChainError.code:
            throw new SwitchChainError(err);
          // CAIP-25: User Rejected Error
          // https://docs.walletconnect.com/2.0/specs/clients/sign/error-codes#rejected-caip-25
          case 5e3:
            throw new UserRejectedRequestError(err);
          default:
            if (err_ instanceof BaseError)
              throw err_;
            throw new UnknownRpcError(err);
        }
      }
    }, {
      delay: ({ count, error }) => {
        if (error && error instanceof HttpRequestError) {
          const retryAfter = error?.headers?.get("Retry-After");
          if (retryAfter?.match(/\d/))
            return Number.parseInt(retryAfter) * 1e3;
        }
        return ~~(1 << count) * retryDelay;
      },
      retryCount,
      shouldRetry: ({ error }) => shouldRetry(error)
    }), { enabled: dedupe, id: requestId });
  };
}
function shouldRetry(error) {
  if ("code" in error && typeof error.code === "number") {
    if (error.code === -1)
      return true;
    if (error.code === LimitExceededRpcError.code)
      return true;
    if (error.code === InternalRpcError.code)
      return true;
    return false;
  }
  if (error instanceof HttpRequestError && error.status) {
    if (error.status === 403)
      return true;
    if (error.status === 408)
      return true;
    if (error.status === 413)
      return true;
    if (error.status === 429)
      return true;
    if (error.status === 500)
      return true;
    if (error.status === 502)
      return true;
    if (error.status === 503)
      return true;
    if (error.status === 504)
      return true;
    return false;
  }
  return true;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/transports/createTransport.js
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
  const uid2 = uid();
  return {
    config: {
      key,
      methods,
      name,
      request,
      retryCount,
      retryDelay,
      timeout,
      type
    },
    request: buildRequest(request, { methods, retryCount, retryDelay, uid: uid2 }),
    value
  };
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/transports/custom.js
function custom(provider, config = {}) {
  const { key = "custom", methods, name = "Custom Provider", retryDelay } = config;
  return ({ retryCount: defaultRetryCount }) => createTransport({
    key,
    methods,
    name,
    request: provider.request.bind(provider),
    retryCount: config.retryCount ?? defaultRetryCount,
    retryDelay,
    type: "custom"
  });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/getCode.js
async function getCode(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const hex = await client.request({
    method: "eth_getCode",
    params: [address, blockNumberHex || blockTag]
  }, { dedupe: Boolean(blockNumberHex) });
  if (hex === "0x")
    return void 0;
  return hex;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/chain/defineChain.js
function defineChain(chain) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...chain
  };
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/errors/typedData.js
var InvalidDomainError = class extends BaseError {
  constructor({ domain }) {
    super(`Invalid domain "${stringify(domain)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
  }
};
var InvalidPrimaryTypeError = class extends BaseError {
  constructor({ primaryType, types }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
      docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
  }
};
var InvalidStructTypeError = class extends BaseError {
  constructor({ type }) {
    super(`Struct type "${type}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/typedData.js
function serializeTypedData(parameters) {
  const { domain: domain_, message: message_, primaryType, types } = parameters;
  const normalizeData = (struct, data_) => {
    const data = { ...data_ };
    for (const param of struct) {
      const { name, type } = param;
      if (type === "address")
        data[name] = data[name].toLowerCase();
    }
    return data;
  };
  const domain = (() => {
    if (!types.EIP712Domain)
      return {};
    if (!domain_)
      return {};
    return normalizeData(types.EIP712Domain, domain_);
  })();
  const message = (() => {
    if (primaryType === "EIP712Domain")
      return void 0;
    return normalizeData(types[primaryType], message_);
  })();
  return stringify({ domain, message, primaryType, types });
}
function validateTypedData(parameters) {
  const { domain, message, primaryType, types } = parameters;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type } = param;
      const value = data[name];
      const integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
        const [_type, base, size_] = integerMatch;
        numberToHex(value, {
          signed: base === "int",
          size: Number.parseInt(size_) / 8
        });
      }
      if (type === "address" && typeof value === "string" && !isAddress(value))
        throw new InvalidAddressError({ address: value });
      const bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        const [_type, size_] = bytesMatch;
        if (size_ && size(value) !== Number.parseInt(size_))
          throw new BytesSizeMismatchError({
            expectedSize: Number.parseInt(size_),
            givenSize: size(value)
          });
      }
      const struct2 = types[type];
      if (struct2) {
        validateReference(type);
        validateData(struct2, value);
      }
    }
  };
  if (types.EIP712Domain && domain) {
    if (typeof domain !== "object")
      throw new InvalidDomainError({ domain });
    validateData(types.EIP712Domain, domain);
  }
  if (primaryType !== "EIP712Domain") {
    if (types[primaryType])
      validateData(types[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types });
  }
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof domain?.name === "string" && { name: "name", type: "string" },
    domain?.version && { name: "version", type: "string" },
    (typeof domain?.chainId === "number" || typeof domain?.chainId === "bigint") && {
      name: "chainId",
      type: "uint256"
    },
    domain?.verifyingContract && {
      name: "verifyingContract",
      type: "address"
    },
    domain?.salt && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function validateReference(type) {
  if (type === "address" || type === "bool" || type === "string" || type.startsWith("bytes") || type.startsWith("uint") || type.startsWith("int"))
    throw new InvalidStructTypeError({ type });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/assertTransaction.js
function assertTransactionEIP7702(transaction) {
  const { authorizationList } = transaction;
  if (authorizationList) {
    for (const authorization of authorizationList) {
      const { contractAddress, chainId } = authorization;
      if (!isAddress(contractAddress))
        throw new InvalidAddressError({ address: contractAddress });
      if (chainId < 0)
        throw new InvalidChainIdError({ chainId });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
  const { blobVersionedHashes } = transaction;
  if (blobVersionedHashes) {
    if (blobVersionedHashes.length === 0)
      throw new EmptyBlobError();
    for (const hash of blobVersionedHashes) {
      const size_ = size(hash);
      const version3 = hexToNumber(slice(hash, 0, 1));
      if (size_ !== 32)
        throw new InvalidVersionedHashSizeError({ hash, size: size_ });
      if (version3 !== versionedHashVersionKzg)
        throw new InvalidVersionedHashVersionError({
          hash,
          version: version3
        });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxFeePerGas && maxFeePerGas > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
function assertTransactionEIP2930(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}
function assertTransactionLegacy(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/experimental/eip7702/utils/serializeAuthorizationList.js
function serializeAuthorizationList(authorizationList) {
  if (!authorizationList || authorizationList.length === 0)
    return [];
  const serializedAuthorizationList = [];
  for (const authorization of authorizationList) {
    const { contractAddress, chainId, nonce, ...signature } = authorization;
    serializedAuthorizationList.push([
      chainId ? toHex(chainId) : "0x",
      contractAddress,
      nonce ? toHex(nonce) : "0x",
      ...toYParitySignatureArray({}, signature)
    ]);
  }
  return serializedAuthorizationList;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/serializeAccessList.js
function serializeAccessList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const serializedAccessList = [];
  for (let i = 0; i < accessList.length; i++) {
    const { address, storageKeys } = accessList[i];
    for (let j = 0; j < storageKeys.length; j++) {
      if (storageKeys[j].length - 2 !== 64) {
        throw new InvalidStorageKeySizeError({ storageKey: storageKeys[j] });
      }
    }
    if (!isAddress(address, { strict: false })) {
      throw new InvalidAddressError({ address });
    }
    serializedAccessList.push([address, storageKeys]);
  }
  return serializedAccessList;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/utils/transaction/serializeTransaction.js
function serializeTransaction(transaction, signature) {
  const type = getTransactionType(transaction);
  if (type === "eip1559")
    return serializeTransactionEIP1559(transaction, signature);
  if (type === "eip2930")
    return serializeTransactionEIP2930(transaction, signature);
  if (type === "eip4844")
    return serializeTransactionEIP4844(transaction, signature);
  if (type === "eip7702")
    return serializeTransactionEIP7702(transaction, signature);
  return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
  const { authorizationList, chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP7702(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedAuthorizationList = serializeAuthorizationList(authorizationList);
  return concatHex([
    "0x04",
    toRlp([
      toHex(chainId),
      nonce ? toHex(nonce) : "0x",
      maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
      maxFeePerGas ? toHex(maxFeePerGas) : "0x",
      gas ? toHex(gas) : "0x",
      to ?? "0x",
      value ? toHex(value) : "0x",
      data ?? "0x",
      serializedAccessList,
      serializedAuthorizationList,
      ...toYParitySignatureArray(transaction, signature)
    ])
  ]);
}
function serializeTransactionEIP4844(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP4844(transaction);
  let blobVersionedHashes = transaction.blobVersionedHashes;
  let sidecars = transaction.sidecars;
  if (transaction.blobs && (typeof blobVersionedHashes === "undefined" || typeof sidecars === "undefined")) {
    const blobs2 = typeof transaction.blobs[0] === "string" ? transaction.blobs : transaction.blobs.map((x) => bytesToHex(x));
    const kzg = transaction.kzg;
    const commitments2 = blobsToCommitments({
      blobs: blobs2,
      kzg
    });
    if (typeof blobVersionedHashes === "undefined")
      blobVersionedHashes = commitmentsToVersionedHashes({
        commitments: commitments2
      });
    if (typeof sidecars === "undefined") {
      const proofs2 = blobsToProofs({ blobs: blobs2, commitments: commitments2, kzg });
      sidecars = toBlobSidecars({ blobs: blobs2, commitments: commitments2, proofs: proofs2 });
    }
  }
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    maxFeePerBlobGas ? toHex(maxFeePerBlobGas) : "0x",
    blobVersionedHashes ?? [],
    ...toYParitySignatureArray(transaction, signature)
  ];
  const blobs = [];
  const commitments = [];
  const proofs = [];
  if (sidecars)
    for (let i = 0; i < sidecars.length; i++) {
      const { blob, commitment, proof } = sidecars[i];
      blobs.push(blob);
      commitments.push(commitment);
      proofs.push(proof);
    }
  return concatHex([
    "0x03",
    sidecars ? (
      // If sidecars are enabled, envelope turns into a "wrapper":
      toRlp([serializedTransaction, blobs, commitments, proofs])
    ) : (
      // If sidecars are disabled, standard envelope is used:
      toRlp(serializedTransaction)
    )
  ]);
}
function serializeTransactionEIP1559(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP1559(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x02",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionEIP2930(transaction, signature) {
  const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
  assertTransactionEIP2930(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    gasPrice ? toHex(gasPrice) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x01",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionLegacy(transaction, signature) {
  const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
  assertTransactionLegacy(transaction);
  let serializedTransaction = [
    nonce ? toHex(nonce) : "0x",
    gasPrice ? toHex(gasPrice) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x"
  ];
  if (signature) {
    const v = (() => {
      if (signature.v >= 35n) {
        const inferredChainId = (signature.v - 35n) / 2n;
        if (inferredChainId > 0)
          return signature.v;
        return 27n + (signature.v === 35n ? 0n : 1n);
      }
      if (chainId > 0)
        return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
      const v2 = 27n + (signature.v === 27n ? 0n : 1n);
      if (signature.v !== v2)
        throw new InvalidLegacyVError({ v: signature.v });
      return v2;
    })();
    const r = trim(signature.r);
    const s = trim(signature.s);
    serializedTransaction = [
      ...serializedTransaction,
      toHex(v),
      r === "0x00" ? "0x" : r,
      s === "0x00" ? "0x" : s
    ];
  } else if (chainId > 0) {
    serializedTransaction = [
      ...serializedTransaction,
      toHex(chainId),
      "0x",
      "0x"
    ];
  }
  return toRlp(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
  const signature = signature_ ?? transaction;
  const { v, yParity } = signature;
  if (typeof signature.r === "undefined")
    return [];
  if (typeof signature.s === "undefined")
    return [];
  if (typeof v === "undefined" && typeof yParity === "undefined")
    return [];
  const r = trim(signature.r);
  const s = trim(signature.s);
  const yParity_ = (() => {
    if (typeof yParity === "number")
      return yParity ? toHex(1) : "0x";
    if (v === 0n)
      return "0x";
    if (v === 1n)
      return toHex(1);
    return v === 27n ? "0x" : toHex(1);
  })();
  return [yParity_, r === "0x00" ? "0x" : r, s === "0x00" ? "0x" : s];
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/public/multicall.js
async function multicall(client, parameters) {
  const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, multicallAddress: multicallAddress_, stateOverride } = parameters;
  const contracts2 = parameters.contracts;
  const batchSize = batchSize_ ?? (typeof client.batch?.multicall === "object" && client.batch.multicall.batchSize || 1024);
  let multicallAddress = multicallAddress_;
  if (!multicallAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    multicallAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "multicall3"
    });
  }
  const chunkedCalls = [[]];
  let currentChunk = 0;
  let currentChunkSize = 0;
  for (let i = 0; i < contracts2.length; i++) {
    const { abi, address, args, functionName } = contracts2[i];
    try {
      const callData = encodeFunctionData({ abi, args, functionName });
      currentChunkSize += (callData.length - 2) / 2;
      if (
        // Check if batching is enabled.
        batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
        currentChunkSize > batchSize && // Check if the current chunk is not already empty.
        chunkedCalls[currentChunk].length > 0
      ) {
        currentChunk++;
        currentChunkSize = (callData.length - 2) / 2;
        chunkedCalls[currentChunk] = [];
      }
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData,
          target: address
        }
      ];
    } catch (err) {
      const error = getContractError(err, {
        abi,
        address,
        args,
        docsPath: "/docs/contract/multicall",
        functionName
      });
      if (!allowFailure)
        throw error;
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData: "0x",
          target: address
        }
      ];
    }
  }
  const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, "readContract")({
    abi: multicall3Abi,
    address: multicallAddress,
    args: [calls],
    blockNumber,
    blockTag,
    functionName: "aggregate3",
    stateOverride
  })));
  const results = [];
  for (let i = 0; i < aggregate3Results.length; i++) {
    const result = aggregate3Results[i];
    if (result.status === "rejected") {
      if (!allowFailure)
        throw result.reason;
      for (let j = 0; j < chunkedCalls[i].length; j++) {
        results.push({
          status: "failure",
          error: result.reason,
          result: void 0
        });
      }
      continue;
    }
    const aggregate3Result = result.value;
    for (let j = 0; j < aggregate3Result.length; j++) {
      const { returnData, success } = aggregate3Result[j];
      const { callData } = chunkedCalls[i][j];
      const { abi, address, functionName, args } = contracts2[results.length];
      try {
        if (callData === "0x")
          throw new AbiDecodingZeroDataError();
        if (!success)
          throw new RawContractError({ data: returnData });
        const result2 = decodeFunctionResult({
          abi,
          args,
          data: returnData,
          functionName
        });
        results.push(allowFailure ? { result: result2, status: "success" } : result2);
      } catch (err) {
        const error = getContractError(err, {
          abi,
          address,
          args,
          docsPath: "/docs/contract/multicall",
          functionName
        });
        if (!allowFailure)
          throw error;
        results.push({ error, result: void 0, status: "failure" });
      }
    }
  }
  if (results.length !== contracts2.length)
    throw new BaseError("multicall results mismatch");
  return results;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/deployContract.js
function deployContract(walletClient, parameters) {
  const { abi, args, bytecode, ...request } = parameters;
  const calldata = encodeDeployData({ abi, args, bytecode });
  return sendTransaction(walletClient, {
    ...request,
    ...request.authorizationList ? { to: null } : {},
    data: calldata
  });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/getAddresses.js
async function getAddresses(client) {
  if (client.account?.type === "local")
    return [client.account.address];
  const addresses = await client.request({ method: "eth_accounts" }, { dedupe: true });
  return addresses.map((address) => checksumAddress(address));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/getPermissions.js
async function getPermissions(client) {
  const permissions = await client.request({ method: "wallet_getPermissions" }, { dedupe: true });
  return permissions;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/requestAddresses.js
async function requestAddresses(client) {
  const addresses = await client.request({ method: "eth_requestAccounts" }, { dedupe: true, retryCount: 0 });
  return addresses.map((address) => getAddress(address));
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/requestPermissions.js
async function requestPermissions(client, permissions) {
  return client.request({
    method: "wallet_requestPermissions",
    params: [permissions]
  }, { retryCount: 0 });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signMessage.js
async function signMessage(client, { account: account_ = client.account, message }) {
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const account = parseAccount(account_);
  if (account.signMessage)
    return account.signMessage({ message });
  const message_ = (() => {
    if (typeof message === "string")
      return stringToHex(message);
    if (message.raw instanceof Uint8Array)
      return toHex(message.raw);
    return message.raw;
  })();
  return client.request({
    method: "personal_sign",
    params: [message_, account.address]
  }, { retryCount: 0 });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signTransaction.js
async function signTransaction(client, parameters) {
  const { account: account_ = client.account, chain = client.chain, ...transaction } = parameters;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const account = parseAccount(account_);
  assertRequest({
    account,
    ...parameters
  });
  const chainId = await getAction(client, getChainId, "getChainId")({});
  if (chain !== null)
    assertCurrentChain({
      currentChainId: chainId,
      chain
    });
  const formatters2 = chain?.formatters || client.chain?.formatters;
  const format = formatters2?.transactionRequest?.format || formatTransactionRequest;
  if (account.signTransaction)
    return account.signTransaction({
      ...transaction,
      chainId
    }, { serializer: client.chain?.serializers?.transaction });
  return await client.request({
    method: "eth_signTransaction",
    params: [
      {
        ...format(transaction),
        chainId: numberToHex(chainId),
        from: account.address
      }
    ]
  }, { retryCount: 0 });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/signTypedData.js
async function signTypedData(client, parameters) {
  const { account: account_ = client.account, domain, message, primaryType } = parameters;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const account = parseAccount(account_);
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...parameters.types
  };
  validateTypedData({ domain, message, primaryType, types });
  if (account.signTypedData)
    return account.signTypedData({ domain, message, primaryType, types });
  const typedData = serializeTypedData({ domain, message, primaryType, types });
  return client.request({
    method: "eth_signTypedData_v4",
    params: [account.address, typedData]
  }, { retryCount: 0 });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/switchChain.js
async function switchChain(client, { id }) {
  await client.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: numberToHex(id)
      }
    ]
  }, { retryCount: 0 });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/actions/wallet/watchAsset.js
async function watchAsset(client, params) {
  const added = await client.request({
    method: "wallet_watchAsset",
    params
  }, { retryCount: 0 });
  return added;
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/decorators/wallet.js
function walletActions(client) {
  return {
    addChain: (args) => addChain(client, args),
    deployContract: (args) => deployContract(client, args),
    getAddresses: () => getAddresses(client),
    getChainId: () => getChainId(client),
    getPermissions: () => getPermissions(client),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    requestAddresses: () => requestAddresses(client),
    requestPermissions: (args) => requestPermissions(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    sendTransaction: (args) => sendTransaction(client, args),
    signMessage: (args) => signMessage(client, args),
    signTransaction: (args) => signTransaction(client, args),
    signTypedData: (args) => signTypedData(client, args),
    switchChain: (args) => switchChain(client, args),
    watchAsset: (args) => watchAsset(client, args),
    writeContract: (args) => writeContract(client, args)
  };
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/clients/createWalletClient.js
function createWalletClient(parameters) {
  const { key = "wallet", name = "Wallet Client", transport } = parameters;
  const client = createClient({
    ...parameters,
    key,
    name,
    transport,
    type: "walletClient"
  });
  return client.extend(walletActions);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/op-stack/contracts.js
var contracts = {
  gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },
  l1Block: { address: "0x4200000000000000000000000000000000000015" },
  l2CrossDomainMessenger: {
    address: "0x4200000000000000000000000000000000000007"
  },
  l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },
  l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" },
  l2ToL1MessagePasser: {
    address: "0x4200000000000000000000000000000000000016"
  }
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/op-stack/serializers.js
function serializeTransaction2(transaction, signature) {
  if (isDeposit(transaction))
    return serializeTransactionDeposit(transaction);
  return serializeTransaction(transaction, signature);
}
function serializeTransactionDeposit(transaction) {
  assertTransactionDeposit(transaction);
  const { sourceHash, data, from, gas, isSystemTx, mint, to, value } = transaction;
  const serializedTransaction = [
    sourceHash,
    from,
    to ?? "0x",
    mint ? toHex(mint) : "0x",
    value ? toHex(value) : "0x",
    gas ? toHex(gas) : "0x",
    isSystemTx ? "0x1" : "0x",
    data ?? "0x"
  ];
  return concatHex([
    "0x7e",
    toRlp(serializedTransaction)
  ]);
}
function isDeposit(transaction) {
  if (transaction.type === "deposit")
    return true;
  if (typeof transaction.sourceHash !== "undefined")
    return true;
  return false;
}
function assertTransactionDeposit(transaction) {
  const { from, to } = transaction;
  if (from && !isAddress(from))
    throw new InvalidAddressError({ address: from });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/celo/fees.js
var fees = {
  /*
     * Estimates the fees per gas for a transaction.
  
     * If the transaction is to be paid in a token (feeCurrency is present) then the fees
     * are estimated in the value of the token. Otherwise falls back to the default
     * estimation by returning null.
     *
     * @param params fee estimation function parameters
     */
  estimateFeesPerGas: async (params) => {
    if (!params.request?.feeCurrency)
      return null;
    const [gasPrice, maxPriorityFeePerGas, cel2] = await Promise.all([
      estimateFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
      estimateMaxPriorityFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
      isCel2(params.client)
    ]);
    const maxFeePerGas = cel2 ? (
      // eth_gasPrice for cel2 returns baseFeePerGas + maxPriorityFeePerGas
      params.multiply(gasPrice - maxPriorityFeePerGas) + maxPriorityFeePerGas
    ) : (
      // eth_gasPrice for Celo L1 returns (baseFeePerGas * multiplier), where the multiplier is 2 by default.
      gasPrice + maxPriorityFeePerGas
    );
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
};
async function estimateFeePerGasInFeeCurrency(client, feeCurrency) {
  const fee = await client.request({
    method: "eth_gasPrice",
    params: [feeCurrency]
  });
  return BigInt(fee);
}
async function estimateMaxPriorityFeePerGasInFeeCurrency(client, feeCurrency) {
  const feesPerGas = await client.request({
    method: "eth_maxPriorityFeePerGas",
    params: [feeCurrency]
  });
  return BigInt(feesPerGas);
}
async function isCel2(client) {
  const proxyAdminAddress = "0x4200000000000000000000000000000000000018";
  const code = await getCode(client, { address: proxyAdminAddress });
  return Boolean(code);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/celo/utils.js
function isEmpty(value) {
  return value === 0 || value === 0n || value === void 0 || value === null || value === "0" || value === "" || typeof value === "string" && (trim(value).toLowerCase() === "0x" || trim(value).toLowerCase() === "0x00");
}
function isPresent(value) {
  return !isEmpty(value);
}
function isEIP1559(transaction) {
  return typeof transaction.maxFeePerGas !== "undefined" && typeof transaction.maxPriorityFeePerGas !== "undefined";
}
function isCIP64(transaction) {
  if (transaction.type === "cip64") {
    return true;
  }
  return isEIP1559(transaction) && isPresent(transaction.feeCurrency);
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/celo/formatters.js
var formatters = {
  block: /* @__PURE__ */ defineBlock({
    format(args) {
      const transactions = args.transactions?.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formatTransaction(transaction);
        return {
          ...formatted,
          ...transaction.gatewayFee ? {
            gatewayFee: hexToBigInt(transaction.gatewayFee),
            gatewayFeeRecipient: transaction.gatewayFeeRecipient
          } : {},
          feeCurrency: transaction.feeCurrency
        };
      });
      return {
        transactions,
        ...args.randomness ? { randomness: args.randomness } : {}
      };
    }
  }),
  transaction: /* @__PURE__ */ defineTransaction({
    format(args) {
      if (args.type === "0x7e")
        return {
          isSystemTx: args.isSystemTx,
          mint: args.mint ? hexToBigInt(args.mint) : void 0,
          sourceHash: args.sourceHash,
          type: "deposit"
        };
      const transaction = { feeCurrency: args.feeCurrency };
      if (args.type === "0x7b")
        transaction.type = "cip64";
      else {
        if (args.type === "0x7c")
          transaction.type = "cip42";
        transaction.gatewayFee = args.gatewayFee ? hexToBigInt(args.gatewayFee) : null;
        transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
      }
      return transaction;
    }
  }),
  transactionRequest: /* @__PURE__ */ defineTransactionRequest({
    format(args) {
      const request = {};
      if (args.feeCurrency)
        request.feeCurrency = args.feeCurrency;
      if (isCIP64(args))
        request.type = "0x7b";
      return request;
    }
  })
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/celo/serializers.js
function serializeTransaction3(transaction, signature) {
  if (isCIP64(transaction))
    return serializeTransactionCIP64(transaction, signature);
  return serializeTransaction2(transaction, signature);
}
var serializers = {
  transaction: serializeTransaction3
};
function serializeTransactionCIP64(transaction, signature) {
  assertTransactionCIP64(transaction);
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializeAccessList(accessList),
    feeCurrency,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x7b",
    toRlp(serializedTransaction)
  ]);
}
var MAX_MAX_FEE_PER_GAS = maxUint256;
function assertTransactionCIP64(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (gasPrice)
    throw new BaseError("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (isPresent(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (isPresent(maxPriorityFeePerGas) && isPresent(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
  if (isPresent(feeCurrency) && !isAddress(feeCurrency)) {
    throw new BaseError("`feeCurrency` MUST be a token address for CIP-64 transactions.");
  }
  if (isEmpty(feeCurrency)) {
    throw new BaseError("`feeCurrency` must be provided for CIP-64 transactions.");
  }
}

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/celo/chainConfig.js
var chainConfig = {
  contracts,
  formatters,
  serializers,
  fees
};

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/chains/definitions/celo.js
var celo = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 42220,
  name: "Celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  },
  rpcUrls: {
    default: { http: ["https://forno.celo.org"] }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://celoscan.io",
      apiUrl: "https://api.celoscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599
    }
  },
  testnet: false
});

// ../../node_modules/.pnpm/viem@2.23.15_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.24.2/node_modules/viem/_esm/chains/definitions/celoAlfajores.js
var sourceId = 17e3;
var celoAlfajores = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 44787,
  name: "Alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "A-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Alfajores Explorer",
      url: "https://celo-alfajores.blockscout.com",
      apiUrl: "https://celo-alfajores.blockscout.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14569001
    },
    portal: {
      [sourceId]: {
        address: "0x82527353927d8D069b3B452904c942dA149BA381",
        blockCreated: 2411324
      }
    },
    disputeGameFactory: {
      [sourceId]: {
        address: "0xE28AAdcd9883746c0e5068F58f9ea06027b214cb",
        blockCreated: 2411324
      }
    },
    l2OutputOracle: {
      [sourceId]: {
        address: "0x4a2635e9e4f6e45817b1D402ac4904c1d1752438",
        blockCreated: 2411324
      }
    },
    l1StandardBridge: {
      [sourceId]: {
        address: "0xD1B0E0581973c9eB7f886967A606b9441A897037",
        blockCreated: 2411324
      }
    }
  },
  testnet: true
});

// src/hooks/use-wallet-base.ts
function useWalletBase(options = {}) {
  const {
    environment = AppEnvironment.getType(),
    autoConnect = true,
    useTestnet = process.env.NEXT_PUBLIC_USE_TESTNET === "true"
  } = options;
  const [address, setAddress] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [client, setClient] = useState(null);
  const [isMiniPay, setIsMiniPay] = useState(false);
  useEffect2(() => {
    const initWallet = async () => {
      try {
        const inMiniPay = AppEnvironment.isMiniPay();
        setIsMiniPay(inMiniPay);
        if (typeof window === "undefined" || !window.ethereum) {
          console.log("No ethereum provider found");
          return;
        }
        if (environment === "enhanced" || inMiniPay) {
          const chain = useTestnet ? celoAlfajores : celo;
          const walletClient = createWalletClient({
            chain,
            transport: custom(window.ethereum)
          });
          setClient(walletClient);
          console.log("Wallet client initialized", {
            environment,
            inMiniPay,
            chain: chain.name,
            chainId: chain.id
          });
        }
        const handleChainChanged = (chainId2) => {
          console.log("Chain changed:", chainId2);
          const newChainId = Number.parseInt(chainId2, 16);
          setChainId(newChainId);
          if (inMiniPay) {
            window.location.reload();
          }
        };
        const handleAccountsChanged = (accounts) => {
          console.log("Accounts changed:", accounts);
          if (accounts.length === 0) {
            setAddress(null);
            setIsConnected(false);
          } else {
            setAddress(accounts[0]);
            setIsConnected(true);
          }
        };
        if (window.ethereum) {
          window.ethereum.on("chainChanged", handleChainChanged);
          window.ethereum.on("accountsChanged", handleAccountsChanged);
          try {
            const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
            setChainId(Number.parseInt(currentChainId, 16));
          } catch (err) {
            console.warn("Could not get chain ID:", err);
          }
        }
        if ((inMiniPay || autoConnect) && window.ethereum) {
          setTimeout(() => {
            connect2();
          }, inMiniPay ? 500 : 100);
        }
        return () => {
          if (window.ethereum) {
            window.ethereum.removeListener("chainChanged", handleChainChanged);
            window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
          }
        };
      } catch (err) {
        console.error("Error initializing wallet:", err);
        setError(err.message || "Failed to initialize wallet");
      }
    };
    initWallet();
  }, [environment, autoConnect, useTestnet]);
  const connect2 = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      setError("No Ethereum provider found");
      return;
    }
    setIsConnecting(true);
    setError(null);
    try {
      let accounts;
      if (client && (environment === "enhanced" || isMiniPay)) {
        accounts = await client.requestAddresses();
      } else {
        accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
          params: []
        });
      }
      if (accounts && accounts.length > 0) {
        setAddress(accounts[0]);
        setIsConnected(true);
        console.log("Connected to wallet:", {
          address: accounts[0],
          environment,
          isMiniPay
        });
      } else {
        setError("No accounts found");
      }
    } catch (err) {
      console.error("Error connecting wallet:", err);
      setError(err.message || "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  }, [client, environment, isMiniPay]);
  const disconnect2 = useCallback(() => {
    setAddress(null);
    setIsConnected(false);
    setError(null);
    console.log("Wallet disconnected");
  }, []);
  const formatAddress = useCallback((addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }, []);
  const formatBalance = useCallback((bal) => {
    if (!bal) return "0";
    return (Number(bal) / 1e18).toFixed(4);
  }, []);
  return {
    // Core state
    address,
    isConnected,
    isConnecting,
    error,
    chainId,
    // Environment-specific
    isMiniPay,
    client,
    // Actions
    connect: connect2,
    disconnect: disconnect2,
    // Utilities
    formatAddress,
    formatBalance
  };
}

// src/hooks/use-wallet-wagmi.ts
import { useCallback as useCallback4 } from "react";

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/context.js
import { createContext, createElement } from "react";

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/utils/getAction.js
function getAction2(client, actionFn, name) {
  const action_implicit = client[actionFn.name];
  if (typeof action_implicit === "function")
    return action_implicit;
  const action_explicit = client[name];
  if (typeof action_explicit === "function")
    return action_explicit;
  return (params) => actionFn(client, params);
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/version.js
var version = "2.16.7";

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/utils/getVersion.js
var getVersion = () => `@wagmi/core@${version}`;

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/errors/base.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances;
var _BaseError_walk;
var BaseError2 = class _BaseError extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return getVersion();
  }
  constructor(shortMessage, options = {}) {
    super();
    _BaseError_instances.add(this);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "metaMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiCoreError"
    });
    const details = options.cause instanceof _BaseError ? options.cause.details : options.cause?.message ? options.cause.message : options.details;
    const docsPath = options.cause instanceof _BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
    this.message = [
      shortMessage || "An error occurred.",
      "",
      ...options.metaMessages ? [...options.metaMessages, ""] : [],
      ...docsPath ? [
        `Docs: ${this.docsBaseUrl}${docsPath}.html${options.docsSlug ? `#${options.docsSlug}` : ""}`
      ] : [],
      ...details ? [`Details: ${details}`] : [],
      `Version: ${this.version}`
    ].join("\n");
    if (options.cause)
      this.cause = options.cause;
    this.details = details;
    this.docsPath = docsPath;
    this.metaMessages = options.metaMessages;
    this.shortMessage = shortMessage;
  }
  walk(fn) {
    return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
  }
};
_BaseError_instances = /* @__PURE__ */ new WeakSet(), _BaseError_walk = function _BaseError_walk2(err, fn) {
  if (fn?.(err))
    return err;
  if (err.cause)
    return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk2).call(this, err.cause, fn);
  return err;
};

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/errors/config.js
var ChainNotConfiguredError = class extends BaseError2 {
  constructor() {
    super("Chain not configured.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ChainNotConfiguredError"
    });
  }
};
var ConnectorAlreadyConnectedError = class extends BaseError2 {
  constructor() {
    super("Connector already connected.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorAlreadyConnectedError"
    });
  }
};

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/connect.js
async function connect(config, parameters) {
  let connector;
  if (typeof parameters.connector === "function") {
    connector = config._internal.connectors.setup(parameters.connector);
  } else
    connector = parameters.connector;
  if (connector.uid === config.state.current)
    throw new ConnectorAlreadyConnectedError();
  try {
    config.setState((x) => ({ ...x, status: "connecting" }));
    connector.emitter.emit("message", { type: "connecting" });
    const { connector: _, ...rest } = parameters;
    const data = await connector.connect(rest);
    const accounts = data.accounts;
    connector.emitter.off("connect", config._internal.events.connect);
    connector.emitter.on("change", config._internal.events.change);
    connector.emitter.on("disconnect", config._internal.events.disconnect);
    await config.storage?.setItem("recentConnectorId", connector.id);
    config.setState((x) => ({
      ...x,
      connections: new Map(x.connections).set(connector.uid, {
        accounts,
        chainId: data.chainId,
        connector
      }),
      current: connector.uid,
      status: "connected"
    }));
    return { accounts, chainId: data.chainId };
  } catch (error) {
    config.setState((x) => ({
      ...x,
      // Keep existing connector connected in case of error
      status: x.current ? "connected" : "disconnected"
    }));
    throw error;
  }
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/disconnect.js
async function disconnect(config, parameters = {}) {
  let connector;
  if (parameters.connector)
    connector = parameters.connector;
  else {
    const { connections: connections2, current } = config.state;
    const connection = connections2.get(current);
    connector = connection?.connector;
  }
  const connections = config.state.connections;
  if (connector) {
    await connector.disconnect();
    connector.emitter.off("change", config._internal.events.change);
    connector.emitter.off("disconnect", config._internal.events.disconnect);
    connector.emitter.on("connect", config._internal.events.connect);
    connections.delete(connector.uid);
  }
  config.setState((x) => {
    if (connections.size === 0)
      return {
        ...x,
        connections: /* @__PURE__ */ new Map(),
        current: null,
        status: "disconnected"
      };
    const nextConnection = connections.values().next().value;
    return {
      ...x,
      connections: new Map(connections),
      current: nextConnection.connector.uid
    };
  });
  {
    const current = config.state.current;
    if (!current)
      return;
    const connector2 = config.state.connections.get(current)?.connector;
    if (!connector2)
      return;
    await config.storage?.setItem("recentConnectorId", connector2.id);
  }
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/utils/getUnit.js
function getUnit(unit) {
  if (typeof unit === "number")
    return unit;
  if (unit === "wei")
    return 0;
  return Math.abs(weiUnits[unit]);
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/getAccount.js
function getAccount(config) {
  const uid2 = config.state.current;
  const connection = config.state.connections.get(uid2);
  const addresses = connection?.accounts;
  const address = addresses?.[0];
  const chain = config.chains.find((chain2) => chain2.id === connection?.chainId);
  const status = config.state.status;
  switch (status) {
    case "connected":
      return {
        address,
        addresses,
        chain,
        chainId: connection?.chainId,
        connector: connection?.connector,
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "reconnecting":
      return {
        address,
        addresses,
        chain,
        chainId: connection?.chainId,
        connector: connection?.connector,
        isConnected: !!address,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: true,
        status
      };
    case "connecting":
      return {
        address,
        addresses,
        chain,
        chainId: connection?.chainId,
        connector: connection?.connector,
        isConnected: false,
        isConnecting: true,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: false,
        isConnecting: false,
        isDisconnected: true,
        isReconnecting: false,
        status
      };
  }
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/multicall.js
async function multicall2(config, parameters) {
  const { allowFailure = true, chainId, contracts: contracts2, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, multicall, "multicall");
  return action({
    allowFailure,
    contracts: contracts2,
    ...rest
  });
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/readContract.js
function readContract2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, readContract, "readContract");
  return action(rest);
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/readContracts.js
async function readContracts(config, parameters) {
  const { allowFailure = true, blockNumber, blockTag, ...rest } = parameters;
  const contracts2 = parameters.contracts;
  try {
    const contractsByChainId = {};
    for (const [index2, contract] of contracts2.entries()) {
      const chainId = contract.chainId ?? config.state.chainId;
      if (!contractsByChainId[chainId])
        contractsByChainId[chainId] = [];
      contractsByChainId[chainId]?.push({ contract, index: index2 });
    }
    const promises = () => Object.entries(contractsByChainId).map(([chainId, contracts3]) => multicall2(config, {
      ...rest,
      allowFailure,
      blockNumber,
      blockTag,
      chainId: Number.parseInt(chainId),
      contracts: contracts3.map(({ contract }) => contract)
    }));
    const multicallResults = (await Promise.all(promises())).flat();
    const resultIndexes = Object.values(contractsByChainId).flatMap((contracts3) => contracts3.map(({ index: index2 }) => index2));
    return multicallResults.reduce((results, result, index2) => {
      if (results)
        results[resultIndexes[index2]] = result;
      return results;
    }, []);
  } catch (error) {
    if (error instanceof ContractFunctionExecutionError)
      throw error;
    const promises = () => contracts2.map((contract) => readContract2(config, { ...contract, blockNumber, blockTag }));
    if (allowFailure)
      return (await Promise.allSettled(promises())).map((result) => {
        if (result.status === "fulfilled")
          return { result: result.value, status: "success" };
        return { error: result.reason, result: void 0, status: "failure" };
      });
    return await Promise.all(promises());
  }
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/getBalance.js
async function getBalance2(config, parameters) {
  const { address, blockNumber, blockTag, chainId, token: tokenAddress, unit = "ether" } = parameters;
  if (tokenAddress) {
    try {
      return await getTokenBalance(config, {
        balanceAddress: address,
        chainId,
        symbolType: "string",
        tokenAddress
      });
    } catch (error) {
      if (error.name === "ContractFunctionExecutionError") {
        const balance = await getTokenBalance(config, {
          balanceAddress: address,
          chainId,
          symbolType: "bytes32",
          tokenAddress
        });
        const symbol = hexToString(trim(balance.symbol, { dir: "right" }));
        return { ...balance, symbol };
      }
      throw error;
    }
  }
  const client = config.getClient({ chainId });
  const action = getAction2(client, getBalance, "getBalance");
  const value = await action(blockNumber ? { address, blockNumber } : { address, blockTag });
  const chain = config.chains.find((x) => x.id === chainId) ?? client.chain;
  return {
    decimals: chain.nativeCurrency.decimals,
    formatted: formatUnits(value, getUnit(unit)),
    symbol: chain.nativeCurrency.symbol,
    value
  };
}
async function getTokenBalance(config, parameters) {
  const { balanceAddress, chainId, symbolType, tokenAddress, unit } = parameters;
  const contract = {
    abi: [
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [{ type: "address" }],
        outputs: [{ type: "uint256" }]
      },
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: "uint8" }]
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [{ type: symbolType }]
      }
    ],
    address: tokenAddress
  };
  const [value, decimals, symbol] = await readContracts(config, {
    allowFailure: false,
    contracts: [
      {
        ...contract,
        functionName: "balanceOf",
        args: [balanceAddress],
        chainId
      },
      { ...contract, functionName: "decimals", chainId },
      { ...contract, functionName: "symbol", chainId }
    ]
  });
  const formatted = formatUnits(value ?? "0", getUnit(unit ?? decimals));
  return { decimals, formatted, symbol, value };
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/getChainId.js
function getChainId2(config) {
  return config.state.chainId;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length;
    let i;
    if (Array.isArray(a) && Array.isArray(b)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!deepEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key && !deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/getChains.js
var previousChains = [];
function getChains(config) {
  const chains = config.chains;
  if (deepEqual(previousChains, chains))
    return previousChains;
  previousChains = chains;
  return chains;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/getConnections.js
var previousConnections = [];
function getConnections(config) {
  const connections = [...config.state.connections.values()];
  if (config.state.status === "reconnecting")
    return previousConnections;
  if (deepEqual(previousConnections, connections))
    return previousConnections;
  previousConnections = connections;
  return connections;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js
var previousConnectors = [];
function getConnectors(config) {
  const connectors = config.connectors;
  if (deepEqual(previousConnectors, connectors))
    return previousConnectors;
  previousConnectors = connectors;
  return connectors;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/errors/connector.js
var SwitchChainNotSupportedError = class extends BaseError2 {
  constructor({ connector }) {
    super(`"${connector.name}" does not support programmatic chain switching.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SwitchChainNotSupportedError"
    });
  }
};

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/switchChain.js
async function switchChain2(config, parameters) {
  const { addEthereumChainParameter, chainId } = parameters;
  const connection = config.state.connections.get(parameters.connector?.uid ?? config.state.current);
  if (connection) {
    const connector = connection.connector;
    if (!connector.switchChain)
      throw new SwitchChainNotSupportedError({ connector });
    const chain2 = await connector.switchChain({
      addEthereumChainParameter,
      chainId
    });
    return chain2;
  }
  const chain = config.chains.find((x) => x.id === chainId);
  if (!chain)
    throw new ChainNotConfiguredError();
  config.setState((x) => ({ ...x, chainId }));
  return chain;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/watchAccount.js
function watchAccount(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getAccount(config), onChange, {
    equalityFn(a, b) {
      const { connector: aConnector, ...aRest } = a;
      const { connector: bConnector, ...bRest } = b;
      return deepEqual(aRest, bRest) && // check connector separately
      aConnector?.id === bConnector?.id && aConnector?.uid === bConnector?.uid;
    }
  });
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/watchChainId.js
function watchChainId(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe((state) => state.chainId, onChange);
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js
function watchConnections(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getConnections(config), onChange, {
    equalityFn: deepEqual
  });
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js
function watchConnectors(config, parameters) {
  const { onChange } = parameters;
  return config._internal.connectors.subscribe((connectors, prevConnectors) => {
    onChange(Object.values(connectors), prevConnectors);
  });
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/context.js
var WagmiContext = createContext(void 0);

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/version.js
var version2 = "2.14.16";

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/utils/getVersion.js
var getVersion2 = () => `wagmi@${version2}`;

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/errors/base.js
var BaseError3 = class extends BaseError2 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiError"
    });
  }
  get docsBaseUrl() {
    return "https://wagmi.sh/react";
  }
  get version() {
    return getVersion2();
  }
};

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/errors/context.js
var WagmiProviderNotFoundError = class extends BaseError3 {
  constructor() {
    super("`useConfig` must be used within `WagmiProvider`.", {
      docsPath: "/api/WagmiProvider"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiProviderNotFoundError"
    });
  }
};

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useConfig.js
import { useContext } from "react";
function useConfig(parameters = {}) {
  const config = parameters.config ?? useContext(WagmiContext);
  if (!config)
    throw new WagmiProviderNotFoundError();
  return config;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/actions/watchChains.js
function watchChains(config, parameters) {
  const { onChange } = parameters;
  return config._internal.chains.subscribe((chains, prevChains) => {
    onChange(chains, prevChains);
  });
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js
var import_with_selector = __toESM(require_with_selector(), 1);
import { useMemo, useRef as useRef2 } from "react";
var isPlainObject = (obj) => typeof obj === "object" && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = deepEqual) {
  const trackedKeys = useRef2([]);
  const result = (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getServerSnapshot, (x) => x, (a, b) => {
    if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
      for (const key of trackedKeys.current) {
        const equal = isEqual(a[key], b[key]);
        if (!equal)
          return false;
      }
      return true;
    }
    return isEqual(a, b);
  });
  return useMemo(() => {
    if (isPlainObject(result)) {
      const trackedResult = { ...result };
      let properties = {};
      for (const [key, value] of Object.entries(trackedResult)) {
        properties = {
          ...properties,
          [key]: {
            configurable: false,
            enumerable: true,
            get: () => {
              if (!trackedKeys.current.includes(key)) {
                trackedKeys.current.push(key);
              }
              return value;
            }
          }
        };
      }
      Object.defineProperties(trackedResult, properties);
      return trackedResult;
    }
    return result;
  }, [result]);
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useAccount.js
function useAccount(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStoreWithTracked((onChange) => watchAccount(config, { onChange }), () => getAccount(config));
}

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/utils.js
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject2(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (array || isPlainObject2(a) && isPlainObject2(b)) {
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b[key] === void 0) {
        copy[key] = void 0;
        equalItems++;
      } else {
        copy[key] = replaceEqualDeep(a[key], b[key]);
        if (copy[key] === a[key] && a[key] !== void 0) {
          equalItems++;
        }
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function shallowEqualObjects(a, b) {
  if (!b || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject2(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    if (process.env.NODE_ENV !== "production") {
      try {
        return replaceEqualDeep(prevData, data);
      } catch (error) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
        );
        throw error;
      }
    }
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
var skipToken = Symbol();

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/focusManager.js
var FocusManager = class extends Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== "hidden";
  }
};
var focusManager = new FocusManager();

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/onlineManager.js
var OnlineManager = class extends Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/thenable.js
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/retryer.js
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/notifyManager.js
var defaultScheduler = (cb) => setTimeout(cb, 0);
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/query.js
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/mutation.js
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/queryObserver.js
var QueryObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.options = options;
    this.#client = client;
    this.#selectError = null;
    this.#currentThenable = pendingThenable();
    if (!this.options.experimental_prefetchInRender) {
      this.#currentThenable.reject(
        new Error("experimental_prefetchInRender feature flag is not enabled")
      );
    }
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #currentThenable;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    this.#updateQuery();
    this.#currentQuery.setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result, onPropTracked) {
    const trackedResult = {};
    Object.keys(result).forEach((key) => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.trackProp(key);
          onPropTracked?.(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }
  trackProp(key) {
    this.#trackedProps.add(key);
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    const staleTime = resolveStaleTime(
      this.options.staleTime,
      this.#currentQuery
    );
    if (isServer || this.#currentResult.isStale || !isValidTimeout(staleTime)) {
      return;
    }
    const time = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime);
    const timeout = time + 1;
    this.#staleTimeoutId = setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (isServer || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    if (options.select && newState.data !== void 0) {
      if (prevResult && newState.data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(newState.data);
          data = replaceData(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    } else {
      data = newState.data;
    }
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
        if (options.select && placeholderData !== void 0) {
          try {
            placeholderData = options.select(placeholderData);
            this.#selectError = null;
          } catch (selectError) {
            this.#selectError = selectError;
          }
        }
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: this.#currentThenable
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const finalizeThenableIfPossible = (thenable) => {
        if (nextResult.status === "error") {
          thenable.reject(nextResult.error);
        } else if (nextResult.data !== void 0) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = this.#currentThenable = nextResult.promise = pendingThenable();
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = this.#currentThenable;
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    this.#notify({ listeners: shouldNotifyListeners() });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false) {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

// ../../node_modules/.pnpm/@tanstack+query-core@5.72.2/node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var MutationObserver = class extends Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!shallowEqualObjects(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) {
      this.reset();
    } else if (this.#currentMutation?.state.status === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? getDefaultState();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const context = this.#currentResult.context;
        if (action?.type === "success") {
          this.#mutateOptions.onSuccess?.(action.data, variables, context);
          this.#mutateOptions.onSettled?.(action.data, null, variables, context);
        } else if (action?.type === "error") {
          this.#mutateOptions.onError?.(action.error, variables, context);
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            variables,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/query/utils.js
function hashFn(queryKey) {
  return JSON.stringify(queryKey, (_, value) => {
    if (isPlainObject3(value))
      return Object.keys(value).sort().reduce((result, key) => {
        result[key] = value[key];
        return result;
      }, {});
    if (typeof value === "bigint")
      return value.toString();
    return value;
  });
}
function isPlainObject3(value) {
  if (!hasObjectPrototype2(value)) {
    return false;
  }
  const ctor = value.constructor;
  if (typeof ctor === "undefined")
    return true;
  const prot = ctor.prototype;
  if (!hasObjectPrototype2(prot))
    return false;
  if (!prot.hasOwnProperty("isPrototypeOf"))
    return false;
  return true;
}
function hasObjectPrototype2(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function filterQueryOptions(options) {
  const {
    // import('@tanstack/query-core').QueryOptions
    _defaulted,
    behavior,
    gcTime,
    initialData,
    initialDataUpdatedAt,
    maxPages,
    meta,
    networkMode,
    queryFn,
    queryHash,
    queryKey,
    queryKeyHashFn,
    retry,
    retryDelay,
    structuralSharing: structuralSharing2,
    // import('@tanstack/query-core').InfiniteQueryObserverOptions
    getPreviousPageParam,
    getNextPageParam,
    initialPageParam,
    // import('@tanstack/react-query').UseQueryOptions
    _optimisticResults,
    enabled,
    notifyOnChangeProps,
    placeholderData,
    refetchInterval,
    refetchIntervalInBackground,
    refetchOnMount,
    refetchOnReconnect,
    refetchOnWindowFocus,
    retryOnMount,
    select,
    staleTime,
    suspense,
    throwOnError,
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    config,
    connector,
    query,
    ...rest
  } = options;
  return rest;
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/query/connect.js
function connectMutationOptions(config) {
  return {
    mutationFn(variables) {
      return connect(config, variables);
    },
    mutationKey: ["connect"]
  };
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/query/disconnect.js
function disconnectMutationOptions(config) {
  return {
    mutationFn(variables) {
      return disconnect(config, variables);
    },
    mutationKey: ["disconnect"]
  };
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/query/getBalance.js
function getBalanceQueryOptions(config, options = {}) {
  return {
    async queryFn({ queryKey }) {
      const { address, scopeKey: _, ...parameters } = queryKey[1];
      if (!address)
        throw new Error("address is required");
      const balance = await getBalance2(config, {
        ...parameters,
        address
      });
      return balance ?? null;
    },
    queryKey: getBalanceQueryKey(options)
  };
}
function getBalanceQueryKey(options = {}) {
  return ["balance", filterQueryOptions(options)];
}

// ../../node_modules/.pnpm/@wagmi+core@2.16.7_@tanstack+query-core@5.72.2_@types+react@18.3.20_react@19.1.0_typesc_da705c9e83c35cd60a3f498836977b9d/node_modules/@wagmi/core/dist/esm/query/switchChain.js
function switchChainMutationOptions(config) {
  return {
    mutationFn(variables) {
      return switchChain2(config, variables);
    },
    mutationKey: ["switchChain"]
  };
}

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
import * as React2 from "react";
import { jsx } from "react/jsx-runtime";
var QueryClientContext = React2.createContext(
  void 0
);
var useQueryClient = (queryClient) => {
  const client = React2.useContext(QueryClientContext);
  if (queryClient) {
    return queryClient;
  }
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
};

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/isRestoring.js
import * as React3 from "react";
var IsRestoringContext = React3.createContext(false);
var useIsRestoring = () => React3.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
import * as React4 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = React4.createContext(createValue());
var useQueryErrorResetBoundary = () => React4.useContext(QueryErrorResetBoundaryContext);

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
import * as React5 from "react";

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/utils.js
function shouldThrowError(throwError, params) {
  if (typeof throwError === "function") {
    return throwError(...params);
  }
  return !!throwError;
}
function noop2() {
}

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  React5.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/suspense.js
var ensureSuspenseTimers = (defaultedOptions) => {
  const originalStaleTime = defaultedOptions.staleTime;
  if (defaultedOptions.suspense) {
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => Math.max(originalStaleTime(...args), 1e3) : Math.max(originalStaleTime ?? 1e3, 1e3);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, 1e3);
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
import * as React6 from "react";
function useBaseQuery(options, Observer, queryClient) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new Error(
        'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
      );
    }
  }
  const client = useQueryClient(queryClient);
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedOptions = client.defaultQueryOptions(options);
  client.getDefaultOptions().queries?._experimental_beforeQuery?.(
    defaultedOptions
  );
  if (process.env.NODE_ENV !== "production") {
    if (!defaultedOptions.queryFn) {
      console.error(
        `[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
      );
    }
  }
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = React6.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  React6.useSyncExternalStore(
    React6.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop2;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React6.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query: client.getQueryCache().get(defaultedOptions.queryHash),
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  ;
  client.getDefaultOptions().queries?._experimental_afterQuery?.(
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !isServer && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      client.getQueryCache().get(defaultedOptions.queryHash)?.promise
    );
    promise?.catch(noop2).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useQuery.js
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver, queryClient);
}

// ../../node_modules/.pnpm/@tanstack+react-query@5.72.2_react@19.1.0/node_modules/@tanstack/react-query/build/modern/useMutation.js
import * as React7 from "react";
function useMutation(options, queryClient) {
  const client = useQueryClient(queryClient);
  const [observer] = React7.useState(
    () => new MutationObserver(
      client,
      options
    )
  );
  React7.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = React7.useSyncExternalStore(
    React7.useCallback(
      (onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = React7.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(noop2);
    },
    [observer]
  );
  if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/utils/query.js
function useQuery2(parameters) {
  const result = useQuery({
    ...parameters,
    queryKeyHashFn: hashFn
    // for bigint support
  });
  result.queryKey = parameters.queryKey;
  return result;
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useChainId.js
import { useSyncExternalStore as useSyncExternalStore3 } from "react";
function useChainId(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStore3((onChange) => watchChainId(config, { onChange }), () => getChainId2(config), () => getChainId2(config));
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useBalance.js
function useBalance(parameters = {}) {
  const { address, query = {} } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBalanceQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const enabled = Boolean(address && (query.enabled ?? true));
  return useQuery2({ ...query, ...options, enabled });
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useChains.js
import { useSyncExternalStore as useSyncExternalStore4 } from "react";
function useChains(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStore4((onChange) => watchChains(config, { onChange }), () => getChains(config), () => getChains(config));
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useConnect.js
import { useEffect as useEffect7 } from "react";

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useConnectors.js
import { useSyncExternalStore as useSyncExternalStore5 } from "react";
function useConnectors(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStore5((onChange) => watchConnectors(config, { onChange }), () => getConnectors(config), () => getConnectors(config));
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useConnect.js
function useConnect(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = connectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  useEffect7(() => {
    return config.subscribe(({ status }) => status, (status, previousStatus) => {
      if (previousStatus === "connected" && status === "disconnected")
        result.reset();
    });
  }, [config, result.reset]);
  return {
    ...result,
    connect: mutate,
    connectAsync: mutateAsync,
    connectors: useConnectors({ config })
  };
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useConnections.js
import { useSyncExternalStore as useSyncExternalStore6 } from "react";
function useConnections(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStore6((onChange) => watchConnections(config, { onChange }), () => getConnections(config), () => getConnections(config));
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useDisconnect.js
function useDisconnect(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = disconnectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    connectors: useConnections({ config }).map((connection) => connection.connector),
    disconnect: mutate,
    disconnectAsync: mutateAsync
  };
}

// ../../node_modules/.pnpm/wagmi@2.14.16_@tanstack+query-core@5.72.2_@tanstack+react-query@5.72.2_react@19.1.0__@t_85702f6b1bd0f2e3b16252dea46a2ab0/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js
function useSwitchChain(parameters = {}) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = switchChainMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({
    ...mutation,
    ...mutationOptions
  });
  return {
    ...result,
    chains: useChains({ config }),
    switchChain: mutate,
    switchChainAsync: mutateAsync
  };
}

// src/hooks/use-wallet-wagmi.ts
function useWalletWagmi() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connect: wagmiConnect, connectors, isPending: isConnecting } = useConnect();
  const { switchChain: switchChain3 } = useSwitchChain();
  const { disconnect: wagmiDisconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });
  const connect2 = useCallback4(async () => {
    if (connectors.length > 0) {
      wagmiConnect({ connector: connectors[0] });
    }
  }, [wagmiConnect, connectors]);
  const disconnect2 = useCallback4(() => {
    wagmiDisconnect();
  }, [wagmiDisconnect]);
  const formatAddress = useCallback4((addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }, []);
  const formatBalance = useCallback4((bal) => {
    if (!bal) return "0";
    return (Number(bal) / 1e18).toFixed(4);
  }, []);
  return {
    // Core state
    address: address || null,
    isConnected,
    isConnecting,
    error: null,
    // Wagmi handles errors differently
    chainId: chainId || null,
    // Environment-specific
    isMiniPay: false,
    // Main app is never MiniPay
    client: null,
    // Wagmi manages this internally
    // Actions
    connect: connect2,
    disconnect: disconnect2,
    // Utilities
    formatAddress,
    formatBalance,
    // Additional wagmi-specific data
    balance,
    connectors,
    switchChain: switchChain3
  };
}

// src/hooks/use-swap-base.ts
import { useState as useState5, useCallback as useCallback5, useEffect as useEffect8 } from "react";
function useSwapBase(options = {}) {
  const {
    environment = AppEnvironment.getType(),
    defaultChain = "celo",
    defaultProtocol = "mento",
    autoDetectChain = true,
    onSuccess,
    onError,
    onStatusChange
  } = options;
  const [status, setStatus] = useState5("idle");
  const [isLoading, setIsLoading] = useState5(false);
  const [error, setError] = useState5(null);
  const [txHash, setTxHash] = useState5(null);
  const [approvalTxHash, setApprovalTxHash] = useState5(null);
  const [isCompleted, setIsCompleted] = useState5(false);
  const [currentChain, setCurrentChain] = useState5(defaultChain);
  const updateStatus = useCallback5((newStatus) => {
    setStatus(newStatus);
    onStatusChange?.(newStatus);
  }, [onStatusChange]);
  const setErrorWithCallback = useCallback5((errorMessage) => {
    setError(errorMessage);
    updateStatus("error");
    onError?.(errorMessage);
  }, [onError, updateStatus]);
  useEffect8(() => {
    if (autoDetectChain && typeof window !== "undefined" && window.ethereum) {
      const detectChain = async () => {
        try {
          const chainId = await window.ethereum.request({ method: "eth_chainId" });
          const chainIdNum = Number.parseInt(chainId, 16);
          const chainMap = {
            42220: "celo",
            // Celo Mainnet
            44787: "celo",
            // Celo Alfajores
            137: "polygon",
            // Polygon
            8453: "base",
            // Base
            10: "optimism",
            // Optimism
            1: "ethereum"
            // Ethereum
          };
          const detectedChain = chainMap[chainIdNum];
          if (detectedChain) {
            setCurrentChain(detectedChain);
          }
        } catch (err) {
          console.warn("Could not detect chain:", err);
        }
      };
      detectChain();
    }
  }, [autoDetectChain]);
  const supportedProtocols = (() => {
    switch (currentChain) {
      case "celo":
        return ["mento", "uniswap"];
      case "polygon":
        return ["uniswap", "brian"];
      case "base":
        return ["aerodrome", "uniswap", "onchainkit"];
      case "optimism":
        return ["velodrome", "uniswap"];
      case "ethereum":
        return ["uniswap", "onchainkit"];
      default:
        return ["uniswap"];
    }
  })();
  const executeSwap = useCallback5(async (params) => {
    try {
      setIsLoading(true);
      setError(null);
      updateStatus("approving");
      const chain = params.chain || currentChain || defaultChain;
      const protocol = params.protocol || defaultProtocol;
      console.log("Executing swap:", {
        ...params,
        chain,
        protocol,
        environment
      });
      if (!params.fromToken || !params.toToken || !params.amount) {
        throw new Error("Missing required swap parameters");
      }
      if (Number.parseFloat(params.amount) <= 0) {
        throw new Error("Amount must be greater than 0");
      }
      if (!supportedProtocols.includes(protocol)) {
        throw new Error(`Protocol ${protocol} not supported on ${chain}`);
      }
      updateStatus("swapping");
      await new Promise((resolve) => setTimeout(resolve, 2e3));
      const result = {
        swapTxHash: "0x" + Math.random().toString(16).substr(2, 64),
        success: true
      };
      setTxHash(result.swapTxHash || null);
      setIsCompleted(true);
      updateStatus("completed");
      onSuccess?.(result);
      return result;
    } catch (err) {
      const errorMessage = err.message || "Swap failed";
      setErrorWithCallback(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsLoading(false);
    }
  }, [currentChain, defaultChain, defaultProtocol, environment, supportedProtocols, updateStatus, setErrorWithCallback, onSuccess]);
  const reset = useCallback5(() => {
    setStatus("idle");
    setIsLoading(false);
    setError(null);
    setTxHash(null);
    setApprovalTxHash(null);
    setIsCompleted(false);
  }, []);
  const estimateGas2 = useCallback5(async (params) => {
    return "0.001";
  }, []);
  const getQuote = useCallback5(async (params) => {
    const inputAmount = Number.parseFloat(params.amount);
    const mockRate = 0.98;
    return (inputAmount * mockRate).toString();
  }, []);
  const checkAllowance = useCallback5(async (token, amount) => {
    return true;
  }, []);
  return {
    // Core state
    status,
    isLoading,
    error,
    txHash,
    approvalTxHash,
    isCompleted,
    // Chain/protocol info
    currentChain,
    supportedProtocols,
    // Actions
    executeSwap,
    reset,
    // Utilities
    estimateGas: estimateGas2,
    getQuote,
    checkAllowance
  };
}

// src/hooks/use-swap-celo.ts
import { useCallback as useCallback6 } from "react";
var CELO_STABLECOINS = {
  CUSD: "cUSD",
  CEUR: "cEUR",
  CREAL: "cREAL",
  CKES: "cKES",
  CCOP: "cCOP",
  PUSO: "PUSO",
  CGHS: "cGHS",
  CXOF: "cXOF"
};
function useSwapCelo(options = {}) {
  const baseSwap = useSwapBase({
    ...options,
    defaultChain: "celo",
    defaultProtocol: "mento"
  });
  const executeSwap = useCallback6(async (params) => {
    const swapParams = {
      ...params,
      chain: "celo",
      protocol: "mento"
    };
    return baseSwap.executeSwap(swapParams);
  }, [baseSwap]);
  const getQuote = useCallback6(async (params) => {
    return baseSwap.getQuote({
      ...params,
      chain: "celo",
      protocol: "mento"
    });
  }, [baseSwap]);
  return {
    ...baseSwap,
    executeSwap,
    getQuote,
    // Celo-specific utilities
    supportedTokens: Object.keys(CELO_STABLECOINS),
    isValidCeloToken: (token) => {
      return token in CELO_STABLECOINS;
    }
  };
}
export {
  AVAILABLE_TOKENS,
  AppEnvironment,
  CurrencyPerformanceChart,
  EXCHANGE_RATES,
  MOCK_REGION_DATA,
  PerformanceMonitor,
  REGION_BG_COLORS,
  REGION_COLORS,
  getRegionColors as REGION_COLORS_LEGACY,
  REGION_CONTRAST_COLORS,
  REGION_DARK_COLORS,
  getBundleStrategy,
  getEnvironmentType,
  getMockRegionData,
  getOptimizationHints,
  getRegionColors,
  importForEnvironment,
  isCriticalResource,
  isMiniPayEnvironment,
  isMobileEnvironment,
  preloadResource,
  shouldLoadFeature,
  shouldRenderDiversiFiUI,
  useSwapBase,
  useSwapCelo,
  useWalletBase,
  useWalletWagmi
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
