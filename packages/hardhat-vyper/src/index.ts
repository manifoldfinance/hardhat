import { TASK_COMPILE } from "hardhat/builtin-tasks/task-names";
import { task } from "hardhat/internal/core/config/config-env";
import { HardhatConfig } from "hardhat/types";

import "./type-extensions";
import { VyperConfig } from "./types";

function getConfig(config: HardhatConfig): VyperConfig {
  const defaultConfig = { version: "latest" };
  return { ...defaultConfig, ...config.vyper };
}

export default function () {
  task(TASK_COMPILE, async (_, { config, artifacts }) => {
    const { compile } = await import("./compilation");

    const vyperConfig = getConfig(config);

    // This plugin is experimental, so this task isn't split into multiple
    // subtasks yet.
    await compile(vyperConfig, config.paths, artifacts);
  });
}
