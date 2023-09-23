---
title:  707.设计链表 
---
[[toc]]
# 707.设计链表 
[力扣链接](https://leetcode.cn/problems/design-linked-list/description/)  

你可以选择使用单链表或者双链表，设计并实现自己的链表。  
单链表中的节点应该具备两个属性：`val` 和 `next` 。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。  
如果是双向链表，则还需要属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点下标从`0`开始。  

实现 `MyLinkedList` 类： 

+ `MyLinkedList()` 初始化 `MyLinkedList` 对象。  
+ `int get(int index)` 获取链表中下标为 index 的节点的值。如果下标无效，则返回 `-1` 。  
+ `void addAtHead(int val)` 将一个值为 `val` 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。  
+ `void addAtTail(int val)` 将一个值为 `val` 的节点追加到链表中作为链表的最后一个元素。  
+ `void addAtIndex(int index, int val)` 将一个值为 `val` 的节点插入到链表中下标为 `index` 的节点之前。如果 `index` 等于链表的长度，那么该节点会被追加到链表的末尾。如果 `index` 比长度更大，该节点将 不会插入到链表中。  
+ `void deleteAtIndex(int index)` 如果下标有效，则删除链表中下标为 `index` 的节点。
 
> **输入**  
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]  
[[], [1], [3], [1, 2], [1], [1], [1]]  
**输出**  
[null, null, null, null, 2, null, 3]  
**解释**  
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
myLinkedList.get(1);              // 返回 3

## 思路  
这道题目设计链表的五个接口： 

+ 获取链表第index个节点的数值
+ 在链表的最前面插入一个节点
+ 在链表的最后面插入一个节点
+ 在链表第index个节点前面插入一个节点
+ 删除链表的第index个节点

### 获取第index个节点
在get函数中，cur需要定位到第n个，故
~~~java
 ListNode cur = dummy.next;//注意这个的赋值与下面不同
        while(index != 0) {
            cur = cur.next;
            index--;
        }
~~~
### 插入和删除
在add或delete中，cur需要定位到第n个的**前一个**，故
~~~java
   ListNode cur = dummy;
        while(index != 0) {
            cur = cur.next;
            index--;
        }
~~~
#### 插入
链表中插入节点
~~~java
 ListNode toAdd = new ListNode(val);
        toAdd.next = cur.next;
        cur.next = toAdd;
~~~  
#### 删除
链表中删除节点
~~~java
cur.next = cur.next.next;
~~~
## java代码：
完整java代码：
~~~java
class MyLinkedList {
    int size;
    ListNode dummy;

    public MyLinkedList() {
        size = 0;
        dummy = new ListNode(0);//设置虚拟节点
    }

    public int get(int index) {
        if (index < 0 || index >= size) {
            return -1;
        }
        ListNode cur = dummy.next;//注意这个的赋值与下面不同
        while(index != 0) {
            cur = cur.next;
            index--;
        }
        return cur.val;
    }

    public void addAtHead(int val) {
        addAtIndex(0, val);
    }

    public void addAtTail(int val) {
        addAtIndex(size, val);
    }

    public void addAtIndex(int index, int val) {
        if (index > size) {
            return;
        }
        index = Math.max(0, index);
        size++;
        ListNode cur = dummy;//注意这个的赋值与上面不同
        while(index != 0) {//模仿C中 ``while(index){}``
            cur = cur.next;
            index--;
        }
        ListNode toAdd = new ListNode(val);
        toAdd.next = cur.next;
        cur.next = toAdd;
    }

    public void deleteAtIndex(int index) {
        if (index < 0 || index >= size) {
            return;
        }
        size--;
        ListNode cur = dummy;
        while(index != 0) {
            cur = cur.next;
            index--;
        }
        cur.next = cur.next.next;
    }
}

class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
        this.val = val;
    }
}
~~~