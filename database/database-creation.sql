CREATE DATABASE gila_software_test;
\c gila_software_test;

CREATE EXTENSION "uuid-ossp";

create table message_category (
  id uuid default uuid_generate_v4() not null constraint "PK_e3ada033570a391d8ca06ff85b8" primary key,
  description varchar not null
);

create table notification_message (
  id uuid default uuid_generate_v4() not null constraint "PK_bcacc62c929cc4881ec971b6791" primary key,
  content varchar not null
);

create table notification_type (
  id uuid default uuid_generate_v4() not null constraint "PK_3e0e1fa68c25d84f808ca11dbaa" primary key,
  description varchar not null
);

create table "user" (
  id uuid default uuid_generate_v4() not null constraint "PK_cace4a159ff9f2512dd42373760" primary key,
  name varchar not null,
  email varchar not null,
  "phoneNumber" varchar not null
);

create table message_log (
  id uuid default uuid_generate_v4() not null constraint "PK_f89fb3fddab953711137ce8b62c" primary key,
  "userId" uuid constraint "FK_40a4a05333c3282aaecd9ce2c6a" references "user",
  "messageCategoryId" uuid constraint "FK_916528a6e8a1186742f4034fd44" references message_category,
  "notificationTypeId" uuid constraint "FK_8df650ad86e7fa08bcc9360fee6" references notification_type,
  "notificationId" uuid constraint "FK_f751141578fd5745382f891f905" references notification_message,
  "createdAt" timestamp with time zone not null
);

create table user_subscribed_categories_message_category (
  "userId" uuid not null constraint "FK_c3a7b229ef1e2921a21ab9c0206" references "user" on update cascade on delete cascade,
  "messageCategoryId" uuid not null constraint "FK_3420874c2bb2efb19189a555396" references message_category on update cascade on delete cascade,
  constraint "PK_e5254f3629e6773f4636a8931f8" primary key ("userId", "messageCategoryId")
);

create index "IDX_c3a7b229ef1e2921a21ab9c020" on user_subscribed_categories_message_category ("userId");
create index "IDX_3420874c2bb2efb19189a55539" on user_subscribed_categories_message_category ("messageCategoryId");

create table user_subscribed_channels_notification_type (
  "userId" uuid not null constraint "FK_399a5e902b0dfc9bc0a5693ac54" references "user" on update cascade on delete cascade,
  "notificationTypeId" uuid not null constraint "FK_dfbd7a061ba6fc66346e2c0c48c" references notification_type on update cascade on delete cascade,
  constraint "PK_b469b5596066b11f3ad4539508f" primary key ("userId", "notificationTypeId")
);

create index "IDX_399a5e902b0dfc9bc0a5693ac5" on user_subscribed_channels_notification_type ("userId");
create index "IDX_dfbd7a061ba6fc66346e2c0c48" on user_subscribed_channels_notification_type ("notificationTypeId");
