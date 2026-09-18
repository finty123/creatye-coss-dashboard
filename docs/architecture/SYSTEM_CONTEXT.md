# System Context

## System context

```mermaid
flowchart TD
  U[Users: Desktop Web + Mobile WebApp]
  W[Next.js Web App]
  A[Application / Use Case Layer]
  D[Domain Packages]
  DB[(PostgreSQL)]
  R2[(Cloudflare R2)]
  Q[(Redis / BullMQ)]
  WK[Worker App]
  M[Meta / Social Providers]
  AI[AI Providers]
  OBS[Observability]

  U --> W
  W --> A
  A --> D
  D --> DB
  A --> R2
  A --> Q
  Q --> WK
  WK --> D
  WK --> DB
  WK --> R2
  WK --> M
  WK --> AI
  M --> W
  W --> OBS
  WK --> OBS
```

## Runtime topology

```mermaid
flowchart LR
  Web[Vercel-compatible Web]
  Postgres[(Supabase/PostgreSQL)]
  Redis[(Redis)]
  Worker[Dedicated Worker]
  R2[(Cloudflare R2)]
  Meta[Meta]
  AI[AI Providers]

  Web --> Postgres
  Web --> Redis
  Web --> R2
  Web --> Meta
  Web --> AI
  Redis --> Worker
  Worker --> Postgres
  Worker --> R2
  Worker --> Meta
  Worker --> AI
```

## Responsibility split

Web orchestrates user requests, authentication, authorization, validation, and job intent creation.

Worker executes background workloads such as media processing, publishing, automation execution, AI generation, analytics aggregation, cleanup, and synchronization.

PostgreSQL remains authoritative for product state.

Redis/BullMQ coordinates execution but does not own business truth.
