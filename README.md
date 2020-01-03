# Introduction

We want to get the type from a function that uses Photon's select/include to build type dynamically.

# Building blocks

1. `ReturnType`

It is built into TS and can be used to infer the return type of a function. See `ReturnType` here: https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types

2. `ThenArg`

Since the return type of Photon is a Promise-esque thing (Promise or Thenable or PromiseLike) and we are using `await` keyword, we need to remove the wrapper Promise. We use conditional types for this. Note that `ReturnType` is also a pre-defined conditional type: https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types
