# Django Reddit Clone Challenge!

We are going to spend the day creating a clone of the message board site / forum / garbageheap site [Reddit](https://www.reddit.com).  

I strongly encourage you to build this as a collaborative effort with you final project team.  In order to work most effectively, take advantage of strategies we've used so far.  Pair Programming, User Stories, and Branches can all help your team stay organized and effective.

You may choose to build this out as a traditional Django app or use Django REST framework with React.

Your Django application should have the following:

### Sprint 1 Models

1. **Posts**: a post has one User

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

1. **Comments**: a post has many comments

```python
    # Comment Model
    created_at
    content
    vote_total
    user(FK) (Only after implementing auth)
    post(FK)
```

### Sprint 2 Models

1. **User** (standard Django auth user)

```python
    # User Model
      email
      password
      username
```

1. **Profile**: a user has one profile (User - Profile) 

```python
    # Profile Model
      profile_pic
      user (FK)
```

### Sprint 3 Models

1. **Save**: a user has many Saves with Post as a foreign key ( User < Save > Post ) (Many to Many for User and Post)

```python
    # Save Model
    user(FK)
    post(FK)
    created_at
```
  
1. **Post_Votes**: a post has many post_votes through Users ( User < Post_Votes > Post )

```python
    # Post_Vote Model
    user(FK)
    post(FK)
    value ( choice of -1 or +1)
```  

### Sprint 4 Models

1. **Comment_Votes**: a comment has many comment_votes through Users ( User < Comment_Votes > Comment )

```python
  # Comment_Vote Model
  user(FK)
  comment(FK)
  value ( choice of 1 or +1)
```

1. **Comments** on Comments: a comment has many comments (Comment < Comment )

```python
  # Comment Model
  +comment(FK)
```

### Sprint 5 Models:

1.  **Moderator**: A user can be a moderator (User  Moderator)

```python
  # Moderator Model
  user(FK)
```

## Views

### Sprint 1: MVP

1. All posts (posts)
2. View 1 Post w/ comments (`posts/<int:pk>`)
3. Create Post (`posts/new`)
4. Create Comment (associated with a post) (`posts/<int:pk/comments/new`)

### Sprint 2: Users

1. Registration
2. Login

### Sprint 3: Gettin Trolly

1. Add Votes for Post
2. Add Votes for Comment
3. Save Posts
4. View Saved Posts (`user/<int:pk>/saved`)
5. Create Comment on Comments (`posts/<int:pk>/comments/<int:cpk>/new`)

### Sprint 4: Wrangling the Herd

1. Add moderation
1. subreddits? lol, good luck
