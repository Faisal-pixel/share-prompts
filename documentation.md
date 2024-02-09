# Dependencies Installed

- bcrypt:
- mongoDB
- mongoose
  -next-auth

# Errors faced

1. While installing bcrypt, I got this error:

<blockquote>
npm install bcrypt
npm ERR! code 1
npm ERR! path C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node-pre-gyp install --fallback-to-build
npm ERR! Failed to execute 'C:\Program Files\nodejs\node.exe C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js configure --fallback-to-build --module=C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt\lib\binding\napi-v3\bcrypt_lib.node --module_name=bcrypt_lib --module_path=C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt\lib\binding\napi-v3 --napi_version=9 --node_abi_napi=napi --napi_build_version=3 --node_napi_label=napi-v3' (1)
npm ERR! node-pre-gyp info it worked if it ends with ok
npm ERR! node-pre-gyp info using node-pre-gyp@1.0.11
npm ERR! node-pre-gyp info using node@20.11.0 | win32 | x64
npm ERR! node-pre-gyp info check checked for "C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt\lib\binding\napi-v3\bcrypt_lib.node" (not found)
npm ERR! node-pre-gyp http GET https://github.com/kelektiv/node.bcrypt.js/releases/download/v5.1.1/bcrypt_lib-v5.1.1-napi-v3-win32-x64-unknown.tar.gz
npm ERR! node-pre-gyp ERR! install request to https://objects.githubusercontent.com/github-production-release-asset-2e65be/611333/97a8321c-5d46-45ec-b4ee-95fc5d5053fb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240208T061039Z&X-Amz-Expires=300&X-Amz-Signature=c11658bccce5b43d17a14cd6813aa6bacf969caf467e4f66fecc8b5796e9693e&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=611333&response-content-disposition=attachment%3B%20filename%3Dbcrypt_lib-v5.1.1-napi-v3-win32-x64-unknown.tar.gz&response-content-type=application%2Foctet-stream failed, reason: read ECONNRESET
npm ERR! node-pre-gyp WARN Pre-built binaries not installable for bcrypt@5.1.1 and node@20.11.0 (node-v115 ABI, unknown) (falling back to source compile with node-gyp)
npm ERR! node-pre-gyp WARN Hit error request to https://objects.githubusercontent.com/github-production-release-asset-2e65be/611333/97a8321c-5d46-45ec-b4ee-95fc5d5053fb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240208%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240208T061039Z&X-Amz-Expires=300&X-Amz-Signature=c11658bccce5b43d17a14cd6813aa6bacf969caf467e4f66fecc8b5796e9693e&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=611333&response-content-disposition=attachment%3B%20filename%3Dbcrypt_lib-v5.1.1-napi-v3-win32-x64-unknown.tar.gz&response-content-type=application%2Foctet-stream failed, reason: read ECONNRESET
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@9.4.0
npm ERR! gyp info using node@20.11.0 | win32 | x64
npm ERR! gyp info ok
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@9.4.0
npm ERR! gyp info using node@20.11.0 | win32 | x64
npm ERR! gyp info find Python using Python version 3.10.4 found at "C:\Users\FAISAL ADAMS\AppData\Local\Programs\Python\Python310\python.exe"
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! find VS msvs_version not set from command line or npm config
npm ERR! gyp ERR! find VS VCINSTALLDIR not set, not running in VS Command Prompt
npm ERR! gyp ERR! find VS could not use PowerShell to find Visual Studio 2017 or newer, try re-running with '--loglevel silly' for more details
npm ERR! gyp ERR! find VS not looking for VS2015 as it is only supported up to Node.js 18
npm ERR! gyp ERR! find VS not looking for VS2013 as it is only supported up to Node.js 8
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! find VS **************************************************************
npm ERR! gyp ERR! find VS You need to install the latest version of Visual Studio
npm ERR! gyp ERR! find VS including the "Desktop development with C++" workload.
npm ERR! gyp ERR! find VS For more information consult the documentation at:
npm ERR! gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
npm ERR! gyp ERR! find VS **************************************************************
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! configure error
npm ERR! gyp ERR! stack Error: Could not find any Visual Studio installation to use
npm ERR! gyp ERR! stack     at VisualStudioFinder.fail (C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:122:47)
npm ERR! gyp ERR! stack     at C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:75:16
npm ERR! gyp ERR! stack     at VisualStudioFinder.findVisualStudio2013 (C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:380:14)
npm ERR! gyp ERR! stack     at C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:71:14
npm ERR! gyp ERR! stack     at VisualStudioFinder.findVisualStudio2015 (C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:364:14)
npm ERR! gyp ERR! stack     at C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:67:12
npm ERR! gyp ERR! stack     at failPowershell (C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:156:7)
npm ERR! gyp ERR! stack     at VisualStudioFinder.parseData (C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:170:14)
npm ERR! gyp ERR! stack     at C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:143:14
npm ERR! gyp ERR! stack     at ChildProcess.exithandler (node:child_process:414:7)
npm ERR! gyp ERR! System Windows_NT 10.0.22621
npm ERR! gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Users\\FAISAL ADAMS\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "configure" "--fallback-to-build" "--module=C:\\Users\\FAISAL ADAMS\\OneDrive\\Documents\\TUTORIALS\\JSsimplified_tutorials\\share_prompts\\node_modules\\bcrypt\\lib\\binding\\napi-v3\\bcrypt_lib.node" "--module_name=bcrypt_lib" "--module_path=C:\\Users\\FAISAL ADAMS\\OneDrive\\Documents\\TUTORIALS\\JSsimplified_tutorials\\share_prompts\\node_modules\\bcrypt\\lib\\binding\\napi-v3" "--napi_version=9" "--node_abi_napi=napi" "--napi_build_version=3" "--node_napi_label=napi-v3"
npm ERR! gyp ERR! cwd C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt
npm ERR! gyp ERR! node -v v20.11.0
npm ERR! gyp ERR! node-gyp -v v9.4.0
npm ERR! gyp ERR! not ok
npm ERR! node-pre-gyp ERR! build error
npm ERR! node-pre-gyp ERR! stack Error: Failed to execute 'C:\Program Files\nodejs\node.exe C:\Users\FAISAL ADAMS\AppData\Roaming\npm\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js configure --fallback-to-build --module=C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt\lib\binding\napi-v3\bcrypt_lib.node --module_name=bcrypt_lib --module_path=C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt\lib\binding\napi-v3 --napi_version=9 --node_abi_napi=napi --napi_build_version=3 --node_napi_label=napi-v3' (1)
npm ERR! node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\@mapbox\node-pre-gyp\lib\util\compile.js:89:23)
npm ERR! node-pre-gyp ERR! stack     at ChildProcess.emit (node:events:518:28)
npm ERR! node-pre-gyp ERR! stack     at maybeClose (node:internal/child_process:1105:16)
npm ERR! node-pre-gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:305:5)
npm ERR! node-pre-gyp ERR! System Windows_NT 10.0.22621
npm ERR! node-pre-gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Users\\FAISAL ADAMS\\OneDrive\\Documents\\TUTORIALS\\JSsimplified_tutorials\\share_prompts\\node_modules\\@mapbox\\node-pre-gyp\\bin\\node-pre-gyp" "install" "--fallback-to-build"
npm ERR! node-pre-gyp ERR! cwd C:\Users\FAISAL ADAMS\OneDrive\Documents\TUTORIALS\JSsimplified_tutorials\share_prompts\node_modules\bcrypt
npm ERR! node-pre-gyp ERR! node -v v20.11.0
npm ERR! node-pre-gyp ERR! node-pre-gyp -v v1.0.11
npm ERR! node-pre-gyp ERR! not ok

npm ERR! A complete log of this run can be found in: C:\Users\FAISAL ADAMS\AppData\Local\npm-cache_logs\2024-02-08T06_11_25_239Z-debug-0.log

</blockquote>
