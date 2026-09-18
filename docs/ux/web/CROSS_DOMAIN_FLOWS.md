# Cross-Domain Flows

Cross-domain continuity is central. Users should not rebuild context when moving between areas.

## Video flow

```text
Content
-> Video Studio
-> Save
-> Publish
-> Select Pages
-> Schedule
```

## Image flow

```text
Content
-> Image Studio
-> Save
-> Publish
```

## Analytics flow

```text
Analytics
-> Strong Content
-> Create Variation
-> Studio
-> Publish
```

## Page automation flow

```text
Pages
-> Page A
-> Automations
-> Create Automation
```

Preserved context:

```text
Page = Page A
```

## Failure flow

```text
Home
-> Publication Failed
-> Open
-> Diagnose
-> Retry
```

## Automation failure

```text
Automation Analytics
-> Flow
-> Problematic node
-> Fix
-> Activate
```

## Template flow

```text
Template
-> Create
-> Content / Studio
-> Publish
```

## Context preservation rules

- Page context should carry into Automations, Publishing, Content, and Analytics when entered from Page Detail.
- Content context should carry into Studio, Publishing, Analytics, and Templates.
- Automation context should carry into Flow, Activity, Analytics, and Settings.
- Analytics findings should deep-link into the object and action required.
- Failure states should link to diagnosis and recovery, not just information.
