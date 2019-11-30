# Proposal: [ghostChat]

> Author: [Gary Frederick]
>
> Last updated: [November 29, 2019]

## Abstract

> Chatter is an application for messaging anonymously over the [clearnet](<https://en.wikipedia.org/wiki/Clearnet_(networking)>)

## Background

> Put simply the clearnet is a term used by darknet users to define the regular internet accessible from any browser. This definition bundles the surface web and the deep web. Essentially covering anything accessible by the average non-TOR user. It is in the clearnet where most people conduct business, have conversations, organize events, and anything else relevent to exchanging information. Activity in the clearnet is often monitored by larger organizations often for the purposes of building more robust profiles of users. People tend to find privacy on the clearnet by using a virtual private network (VPN). For those seeking even more anonymity there is always the darknet. For many clearnet users they often find out about the darknet through Reddit and 4chan. While the darknet has existed for a long time, it’s only recently that is has gained much more attention, this is mainly due to the leaks by Snowden and the sudden rush people had to anonymize themselves.

## Proposal

<!-- [A precise statement of the proposed change.] -->

## Rationale

<!-- [A discussion of alternate approaches and the trade offs, advantages, and disadvantages of the specified approach.] -->

## Compatibility

> Although we expect that the vast majority of programs will maintain this compatibility over time, it is impossible to guarantee compatability will be available to every system. This document is an attempt to set expectations for the compatibility of version 1.0.

### Security

> A security issue in the specification or implementation may come to light whose resolution requires breaking compatibility. We reserve the right to address such security issues.

### Unspecified behavior

> The ghostChat specification tries to be explicit about most properties of the software, but there are some aspects that are undefined. Programs that depend on such unspecified behavior may break in future releases.

<!-- > Specification errors. If it becomes necessary to address an inconsistency or incompleteness in the specification, resolving the issue could affect the meaning or legality of existing programs. We reserve the right to address such issues, including updating the implementations. Except for security issues, no incompatible changes to the specification would be made.
> Bugs. If a compiler or library has a bug that violates the specification, a program that depends on the buggy behavior may break if the bug is fixed. We reserve the right to fix such bugs.
> Struct literals. For the addition of features in later point releases, it may be necessary to add fields to exported structs in the API. Code that uses unkeyed struct literals (such as pkg.T{3, "x"}) to create values of these types would fail to compile after such a change. However, code that uses keyed literals (pkg.T{A: 3, B: "x"}) will continue to compile after such a change. We will update such data structures in a way that allows keyed struct literals to remain compatible, although unkeyed literals may fail to compile. (There are also more intricate cases involving nested data structures or interfaces, but they have the same resolution.) We therefore recommend that composite literals whose type is defined in a separate package should use the keyed notation.
> Methods. As with struct fields, it may be necessary to add methods to types. Under some circumstances, such as when the type is embedded in a struct along with another type, the addition of the new method may break the struct by creating a conflict with an existing method of the other embedded type. We cannot protect against this rare case and do not guarantee compatibility should it arise.
> Dot imports. If a program imports a standard package using import . "path", additional names defined in the imported package in future releases may conflict with other names defined in the program. We do not recommend the use of import . outside of tests, and using it may cause a program to fail to compile in future releases.
> Use of package unsafe. Packages that import unsafe may depend on internal properties of the Go implementation. We reserve the right to make changes to the implementation that may break such programs. -->

## The Plan

-   Make a major release every six months.
    -   Three months of general development.
    -   Three months of release testing.
        -   Only bug fixes allowed at this time.
        -   Release candidate 1 issued at beginning of this period

### Timeline

<!-- [A description of the steps in the implementation, who will do them, and when.
This should include a discussion of how the work fits into [Go's release cycle](https://golang.org/wiki/Go-Release-Cycle).] -->

## Open issues (if applicable)

<!-- [A discussion of issues relating to this proposal for which the author does not
know the solution. This section may be omitted if there are none.] -->
