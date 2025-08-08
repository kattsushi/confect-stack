import { makeAtomRuntimeLayer } from '@monorepo/shared/make-atom-runtime-layer'
import * as Effect from 'effect/Effect'
import * as Layer from 'effect/Layer'
import * as Logger from 'effect/Logger'
import * as LogLevel from 'effect/LogLevel'

const MainLayer = Logger.pretty.pipe(
  Layer.provideMerge(Logger.minimumLogLevel(LogLevel.Debug)),
  Layer.tapErrorCause(Effect.logError),
)

export const { runtime, makeAtomRuntime, atomRuntime } = makeAtomRuntimeLayer(MainLayer)
