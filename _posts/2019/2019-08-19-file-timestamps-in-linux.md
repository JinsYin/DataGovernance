---
title: Linux 文件的时间戳
tags:
  - linux
  - fs
---

| 时间戳类型           | 查看方式          | 描述                                 |
| -------------------- | ----------------- | ------------------------------------ |
| atime（access time） | `stat` / `ls -lu` | 最近一次访问文件的时间               |
| mtime（modify time） | `stat` / `ls -l`  | 最近一次修改文件内容的时间           |
| ctime（change time） | `stat` / `ls -lc` | 最近一次改变文件状态（如权限）的时间 |

注：Linux 文件系统通常不会在 inode 中记录文件的创建时间。
