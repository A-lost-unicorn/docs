---
title: 算法
---

### 前言
循序渐进学算法🤓🤓
::: tip 特别感谢
感谢[代码随想录](https://www.programmercarl.com/)路线规划支持❤
:::
<!-- 放照片格式  <img :src="$withBase('../imgs/png1.png')" alt="png1"> -->
# 链表
~~~c
struct Node
{
    int data;
    Node* next;
}
~~~
## 头部插入一个节点
~~~c
void Insert(int x)
{
    Node* temp=new Node;
    temp->data=x;
    temp->next=head;
    head=temp;
}
~~~
<img class="custom" :src="$withBase('/imgs/1.jpg')" alt="1jpg"><br>

<!-- ![An image](/imgs/1.jpg) -->

# 栈

## 用数组实现一个栈

## 用链表实现一个栈

# 队列

## 用数组实现队列

## 用链表实现队列

# 树

# 图

# 基本排序

## 冒泡排序

## 选择排序

## 直接插入排序
~~~java
void InsertSort(int a[],int n){
    int i , j , temp ;
    for(i=1 ; i<n ; i++){
        if(a[i]<a[i-1]){
            temp = a[i];
            for(j=i-1 ; j>=0&&a[j]>temp ; j--){
                a[j+1] = a[j];
            }
            a[j+1] = temp;
        }
    }
}
~~~
<img class="custom" :src="$withBase('/imgs/directInsertionSort.gif')" alt="directInsertionSort_gif"><br>

## 希尔排序

## 归并排序

## 快速排序

## 堆排序

## 桶排序

## 基数排序