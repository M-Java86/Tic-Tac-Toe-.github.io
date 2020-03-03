# Django Reddit Clone Challenge!

We are going to spend the day creating a clone of the message board site /
forum / garbageheap site [Reddit](https://www.reddit.com).  

# Models

1. Posts

    ```python
        # Post Model
        created_at
        title
        picture
        content
        site_url
        vote_total
        user (FK) (Only after implementing auth)
    ```
1. Comments

    ```python
        # Comment Model
        created_at
        content
        vote_total
        user(FK) (Only after implementing auth)
        post(FK)
    ```
1. User

    ```python
        # User Model
          email
          password
          username
    ```
1. Profile

    ```python
        # Profile Model
          profile_pic
          user (FK)
    ```
1. Save

    ```python
        # Save Model
        user(FK)
        post(FK)
        created_at
    ```
1. PostVote

    ```python
        # Post_Vote Model
        user(FK)
        post(FK)
        value ( choice of -1 or +1)
    ```  
1. CommentVote

    ```python
      # Comment_Vote Model
      user(FK)
      comment(FK)
      value ( choice of 1 or +1)
    ```
1. Comments on Comments

    ```python
      # Comment Model
      +comment(FK)
    ```
1.  Moderator

    ```python
      # Moderator Model
      user(FK)
    ```
