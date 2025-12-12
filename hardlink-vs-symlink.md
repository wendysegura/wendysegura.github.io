

# What is the Difference Between a Hard Link and a Symbolic Link?


Hello there again. In this introduction to hard links and symbolic links, we will first try to learn and define what each one means. Then we will discuss what the differences between the two are.

So what is a hard link and what exactly does it do in the shell?

### Hard Link Definition:

A hard link is merely an additional name for an existing file on Linux or other Unix-like operating systems.

Any number of hard links, and thus any number of names, can be created for any file. Hard links can also be created to other hard links. However, they cannot be created for directories, and they cannot cross filesystem boundaries or span across partitions.

Perhaps the most useful application for hard links is to allow files, programs, and scripts (i.e. short programs) to be easily accessed in a different directory from the original file or executable file (i.e., the ready-to-run version of a program). Typing the name of the hard link will cause the program or script to be executed in the same way as using its original name. (http://www.linfo.org/hard_link.html)

So what does this definition really mean? Well, you can create a hard link to an existing file by using the command ln file_name hardlink. I have provided an example below of creating a hard link in action. In the example below I created a hardlink aka a shortcut to the file named file1 with the hardlink named hlink1.
Press enter or click to view image in full size


<img width="720" height="164" alt="image" src="https://github.com/user-attachments/assets/0a833afd-90c7-4e09-9c35-95ea84c62f9c" />

Now lets ```ls -i```. So that it lists all files with inode.


#### INODE Definition: The inode is a data structure in a Unix-style file system which describes a filesystem object such as a file or a directory. Each inode stores the attributes and disk block location(s) of the object’s data.[1] Filesystem object attributes may include metadata (times of last change,[2] access, modification), as well as owner and permission data.[3]

Directories are lists of names assigned to inodes. A directory contains an entry for itself, its parent, and each of its children. (https://en.wikipedia.org/wiki/Inode)

<img width="726" height="364" alt="image" src="https://github.com/user-attachments/assets/83167ae5-7264-45da-83a0-63de3f7e9407" />


If you look at the file1 and the hlink1 you can view the inode on the left side is the same. In essence, hardlinks act as a shortcut to that file that is hard linked.

### Now moving on to “Soft Links”

Soft links is a special kind of file that points to another file, much like a shortcut. Unlike a hard link, a symbolic link does not contain the data in the target file. It simply points to another entry somewhere in the file system. This difference gives symbolic links certain qualities that hard links do not have, such as the ability to link to directories, or to files on remote computers networked through NFS. Also, when you delete a target file, symbolic links to that file become unusable, whereas hard links preserve the contents of the file. (https://kb.iu.edu/d/abbe)

Now let's create a soft link to compare with the hard link we created above.

So let's open up a terminal. Go to the finder or search and input terminal it should pop up click on it and open.

For our example let us first create a file. If we type touch example1 hit enter. We can create a file. Now to create the soft link.

If we type in the shell ```ln -s``` example1 **softlink1** we create a soft link between the files. See the example below.

<img width="848" height="200" alt="image" src="https://github.com/user-attachments/assets/c1d0b78c-0c9e-4072-8b19-42c6d0d37a8e" />


softlink

Now if we were to type ```ls -i``` we will also notice that only the hardlink file has the same inode as the hardlink while the soft link file has different inodes.

<img width="848" height="169" alt="image" src="https://github.com/user-attachments/assets/5b56e757-2df6-45fa-b866-262354d86950" />


what are the differences between hard and soft links?

A soft link does not contain the data in the target file.

A soft link points to another entry somewhere in the file system.

A soft link has the ability to link to directories, or to files on remote computers networked through NFS.

Deleting a target file for a symbolic link makes that link useless.

A hard link preserves the contents of the file.

A hard link cannot be created for directories, and they cannot cross filesystem boundaries or span across partitions.

In a hardlink you can use any of the hardlink names created to execute a program or script in the same manner as the original name given.

### In essence:
>
> “Underneath the file system files are represented by inodes

> A file in the file system is basically a link to an inode.
> A hard link then just creates another file with a link to the same underlying inode.

> When you delete a file it removes one link to the underlying inode. The inode is only deleted (or deletable/over-writable) when all links to the inode have been deleted.

> A symbolic link is a link to another name in the file system.

> Once a hard link has been made the link is to the inode. deleting renaming or moving the original file will not affect the hard link as it links to the underlying inode. Any changes to the data on the inode is reflected in all files that refer to that inode."

   ### Note: Hard links are only valid within the same File System. Symbolic links can span file systems as they are simply the name of another file.”

    (http://stackoverflow.com/questions/185899/what-is-the-difference-between-a-symbolic-link-and-a-hard-link)

### Examining the Shell and how it executes a command

    - The shell reads its input from a file, from a string or from the user’s terminal.
    - Input is broken up into words and operators, obeying the quoting rules. These tokens are separated by metacharacters. Alias expansion is performed.
    - The shell parses (analyzes and substitutes) the tokens into simple and compound commands.
    - The shell performs various shell expansions, breaking the expanded tokens into lists of filenames and commands and arguments.
    - Redirection is performed if necessary, redirection operators and their operands are removed from the argument list.
    - Commands are executed.
    - Optionally the shell waits for the command to complete and collects its exit status.

    <img width="444" height="443" alt="image" src="https://github.com/user-attachments/assets/5bb9f6d5-7c3e-44d5-8462-465a29a28b4d" />


