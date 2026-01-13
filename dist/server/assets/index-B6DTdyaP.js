import { x as createServerRpc, s as createServerFn } from "./worker-entry-Cp1SBzdi.js";
import { p as promises } from "./promises-d4a02vTq.js";
import "node:events";
import "node:stream";
import "node:async_hooks";
import "node:stream/web";
const filePath = "count.txt";
async function readCount() {
  return parseInt(await promises.readFile(filePath, "utf-8").catch(() => "0"));
}
const getCount_createServerFn_handler = createServerRpc("779065a854cd3c8a83fc1f6d279993fb0c1460e9882d64d8e4a9c5d1a7f37ab0", (opts, signal) => getCount.__executeServer(opts, signal));
const getCount = createServerFn({
  method: "GET"
}).handler(getCount_createServerFn_handler, () => {
  return readCount();
});
const updateCount_createServerFn_handler = createServerRpc("4a6fc7c69795985fd86cb3abcfb13c573bafe2093c0f67aaee631bf215685906", (opts, signal) => updateCount.__executeServer(opts, signal));
const updateCount = createServerFn({
  method: "POST"
}).inputValidator((d) => d).handler(updateCount_createServerFn_handler, async ({
  data
}) => {
  console.log(`data: ${data}`);
  const count = await readCount();
  await promises.writeFile(filePath, `${count + data}`);
});
export {
  getCount_createServerFn_handler,
  updateCount_createServerFn_handler
};
