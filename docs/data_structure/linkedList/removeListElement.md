---
title:  203.移除链表元素
---
[[toc]]
# 203.移除链表元素
[力扣链接](https://leetcode.cn/problems/remove-linked-list-elements/)

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。
 
> 输入：head = [1,2,6,3,4,5,6], val = 6  
输出：[1,2,3,4,5]

## 思路  
遇到链表题，首先想**dummy**。
### 1、直接使用原来的链表来进行删除操作。
~~~java {21-25}
/**
 *不添加虚拟节点and pre Node方式
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        while(head != null && head.val == val){
            head = head.next;
        }

        ListNode cur = head;
        while(cur != null && cur.next != null){
           if(cur.next.val == val){
               cur.next = cur.next.next;
           }
           else{cur = cur.next;}
        } 
/*        while(cur.next.val == val){
*               cur.next = cur.next.next;
*           }
*        cur = cur.next;
* 注意 if 和 while 的使用
*/
        return head;
    }
}
~~~

### 2、设置一个虚拟头结点在进行删除操作。


~~~java
class Solution {
    public ListNode removeElements(ListNode head, int val) {
       ListNode dummy = new ListNode(-1, head);

        ListNode cur = dummy;
        while(cur != null && cur.next != null){
           if(cur.next.val == val){
               cur.next = cur.next.next;
           }
           else{cur = cur.next;}
        } 
        return dummy.next;
    }
}
~~~