ALTER TABLE "projects" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "desc" text;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "slug" text;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN "project_name";--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN "project_desc";--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN "url_slug";