import * as hardhat from "./packages/hardhat-core/src/internal/hardhat-network/provider/modules/hardhat"
import * as node from "./packages/hardhat-core/src/internal/hardhat-network/provider/node"
import * as logger from "./packages/hardhat-core/src/internal/hardhat-network/provider/modules/logger"

// @ponicode
describe("hardhat.HardhatModule._impersonateParams", () => {
    let inst28: any
    let inst29: any
    let inst30: any
    let inst25: any
    let inst26: any
    let object9: any
    let inst27: any
    let inst22: any
    let inst23: any
    let object8: any
    let inst24: any
    let inst19: any
    let inst20: any
    let object7: any
    let inst21: any
    let inst16: any
    let inst17: any
    let object6: any
    let inst18: any
    let inst13: any
    let inst14: any
    let object5: any
    let inst15: any
    let inst10: any
    let inst11: any
    let object4: any
    let inst12: any
    let inst7: any
    let inst8: any
    let object3: any
    let inst9: any
    let inst: any
    let inst5: any
    let object2: any
    let inst6: any
    let inst2: any
    let inst3: any
    let object: any
    let inst4: any

    beforeEach(() => {
        inst28 = new node.HardhatNode(undefined)
        inst29 = new logger.ModulesLogger(false, () => undefined, () => undefined)
        inst30 = new hardhat.HardhatModule(inst28, () => undefined, () => undefined, inst29, [])
        inst25 = new node.HardhatNode(undefined)
        inst26 = new logger.ModulesLogger(false, () => undefined, () => undefined)
        object9 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst27 = new hardhat.HardhatModule(inst25, () => undefined, () => undefined, inst26, object9)
        inst22 = new node.HardhatNode(undefined)
        inst23 = new logger.ModulesLogger(false, () => undefined, () => undefined)
        object8 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst24 = new hardhat.HardhatModule(inst22, () => undefined, () => undefined, inst23, object8)
        inst19 = new node.HardhatNode(undefined)
        inst20 = new logger.ModulesLogger(true, () => undefined, () => undefined)
        object7 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst21 = new hardhat.HardhatModule(inst19, () => undefined, () => undefined, inst20, object7)
        inst16 = new node.HardhatNode(undefined)
        inst17 = new logger.ModulesLogger(true, () => undefined, () => undefined)
        object6 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst18 = new hardhat.HardhatModule(inst16, () => undefined, () => undefined, inst17, object6)
        inst13 = new node.HardhatNode(undefined)
        inst14 = new logger.ModulesLogger(true, () => undefined, () => undefined)
        object5 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst15 = new hardhat.HardhatModule(inst13, () => undefined, () => undefined, inst14, object5)
        inst10 = new node.HardhatNode(undefined)
        inst11 = new logger.ModulesLogger(true, () => undefined, () => undefined)
        object4 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst12 = new hardhat.HardhatModule(inst10, () => undefined, () => undefined, inst11, object4)
        inst7 = new node.HardhatNode(undefined)
        inst8 = new logger.ModulesLogger(true, () => undefined, () => undefined)
        object3 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst9 = new hardhat.HardhatModule(inst7, () => undefined, () => undefined, inst8, object3)
        inst = new node.HardhatNode(undefined)
        inst5 = new logger.ModulesLogger(true, () => undefined, () => undefined)
        object2 = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst6 = new hardhat.HardhatModule(inst, () => undefined, () => undefined, inst5, object2)
        inst2 = new node.HardhatNode(undefined)
        inst3 = new logger.ModulesLogger(false, () => undefined, () => undefined)
        object = { 0: () => undefined, 1: () => undefined, 2: () => undefined, 3: () => undefined }
        inst4 = new hardhat.HardhatModule(inst2, () => undefined, () => undefined, inst3, object)
    })

    test("0", () => {
        let result: any = inst15._impersonateParams(undefined)
        expect(result).toBe(null)
    })
})
