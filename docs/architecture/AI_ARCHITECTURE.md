# AI Architecture

AI is a transversal product layer.

Do not bind product logic directly to one provider.

## Provider abstraction

Create a conceptual provider abstraction supporting:

- Text generation.
- Caption generation.
- Content variation.
- Analysis.
- Recommendations.
- Media/image tasks where applicable.
- Future providers.

## Server-side concerns

Keep server-side:

- Provider credentials.
- Model selection.
- Prompt templates.
- Usage.
- Cost metadata.
- Execution status.

## AI governance

Document and implement future support for:

- Provider abstraction.
- Timeout.
- Retry.
- Fallback strategy.
- Usage accounting.
- Prompt/version tracking where useful.
- Error normalization.
- Auditability.

Do not build an unnecessarily complex autonomous-agent architecture.

Heavy AI operations should be async when appropriate.
