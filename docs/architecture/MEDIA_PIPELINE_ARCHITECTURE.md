# Media Pipeline Architecture

## Storage

Use object storage for binary/media data.

Preferred direction: Cloudflare R2.

R2 stores:

- Uploaded video.
- Uploaded images.
- Audio.
- Render outputs.
- Thumbnails.
- Derived media.
- Temporary processing artifacts where necessary.

PostgreSQL stores metadata and references, not large binary payloads.

Original media and derived media must be distinguishable.

## Direct upload flow

```mermaid
sequenceDiagram
  participant Client
  participant Web
  participant R2
  participant DB as PostgreSQL
  participant Queue as BullMQ

  Client->>Web: Request signed upload
  Web->>DB: Create upload intent
  Web-->>Client: Signed upload URL
  Client->>R2: Direct upload
  Client->>Web: Finalize upload
  Web->>DB: Persist metadata
  Web->>Queue: Queue processing if needed
```

Avoid routing large media uploads through the Next.js server.

## Media processing

```mermaid
flowchart TD
  Upload[Upload]
  Media[Media record]
  Probe[Probe / validate]
  Thumb[Thumbnail + metadata extraction]
  Ready[Ready]
  Fail[Failed]

  Upload --> Media
  Media --> Probe
  Probe --> Thumb
  Probe --> Fail
  Thumb --> Ready
```

## Creative output

```mermaid
flowchart TD
  Project[Project]
  Request[Render request]
  Job[Render job]
  Worker[Worker + FFmpeg]
  Output[Output object]
  Metadata[Output metadata]
  Ready[Ready]
  Failed[Failed]

  Project --> Request
  Request --> Job
  Job --> Worker
  Worker --> Output
  Output --> Metadata
  Metadata --> Ready
  Worker --> Failed
```

## Studio architecture

Video/Image Studio works around:

- Project.
- Assets.
- Composition/configuration.
- Preview.
- Output.
- Publish handoff.

Editing configuration should be declarative where possible.

Browser may perform lightweight previews/interactions.

Production rendering must be deterministic and worker-controlled when final render is required.

## FFmpeg

FFmpeg belongs in the Worker environment with sufficient temp disk, longer execution, retries, concurrency controls, and memory/CPU limits.
